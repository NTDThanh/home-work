using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EFCore.Data.DataAccess.Repository
{
    public class CountyRepository
    {
        public void AddDataTemplate()
        {
            Add(RenderCounty());
        }

        private List<County> RenderCounty()
        {
            var cityRepo = new CityRepository();
            var citys = cityRepo.cities;
            var countys = new List<County> { };

            foreach (var city in citys)
            {
                for (int i = 0; i < 20; i++)
                {
                    countys.Add(new County
                    {
                        FullName = "County_" + i + "_" + city.FullName,
                        City = city,
                        NameFormated = "County_" + i + "_" + city.NameFormated,
                        IsDelete = false,
                    });
                };
            }
            return countys;
        }

        public void Add(List<County> countys)
        {
            if (countys == null || countys.Count == 0) return;
            using (var db = new AddressContext())
            {
                db.Countys.AddRange(countys);
                db.SaveChanges();
            }
        }

        public void Delete(County county)
        {
            if (county == null) return;
            using (var db = new AddressContext())
            {
                db.Remove(county);
                db.SaveChanges();
            }
        }

        public void DeleteRange(List<County> countys)
        {
            if (countys == null || countys.Count == 0) return;
            using (var db = new AddressContext())
            {
                db.RemoveRange(countys);
                db.SaveChanges();
            }
        }

        public void Update(County countyNew)
        {
            if (countyNew == null) return;
            using (var db = new AddressContext())
            {
                var cityOld = db.Countys
                    .Single(x => x.CountyId.Equals(countyNew.CountyId));
                cityOld = countyNew;
                db.SaveChanges();
            }
        }

        public County GetCountyById(int countyId)
        {
            County county;
            using (var db = new AddressContext())
            {
                county = db.Countys.Where(x => x.CountyId.Equals(countyId)).Single();
            }
            return county;
        }

        public IEnumerable<County> GetCounty()
        {
            using (var db = new AddressContext())
            {
                return db.Countys.ToArray();
            }
        }

        public void ChangeRelationship()
        {
            using (var db = new AddressContext())
            {
                var county = db.Countys.Single(x => x.FullName.Equals("Thanh Trì"));
                var city = db.CityInfo.Single(x => x.CityCode == 2);

                county.City = city;
                db.SaveChanges();
            }
        }
    }
}
