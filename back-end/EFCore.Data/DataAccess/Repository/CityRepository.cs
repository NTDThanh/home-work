using EFCore.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EFCore.Data.DataAccess.Repository
{
    public class CityRepository
    {
        public List<City> cities = new List<City> {
            new City{CityCode=1,FullName="Hà Nội", NameFormated="Hà_Nội_1", IsDelete=false },
            new City{CityCode=2,FullName="Hà Nam", NameFormated="Hà_Nam_2", IsDelete=false },
            new City{CityCode=3,FullName="Bắc Ninh", NameFormated="Bắc_Ninh_3", IsDelete=false },
            new City{CityCode=4,FullName="Bắc Giang", NameFormated="Bắc_Giang_4", IsDelete=false },
            new City{CityCode=5,FullName="Lạng Sơn", NameFormated="Lạng_Sơn_5", IsDelete=false },
        };
        public void AddDataTemplate()
        {
            Add(cities);
        }

        public void Add(List<City> citys)
        {
            if (citys == null || citys.Count == 0) return;
            using (var db = new AddressContext())
            {
                db.CityInfo.AddRange(citys);
                db.SaveChanges();
            }
        }

        public City GetCountyById(int cityCode)
        {
            City city;
            using (var db = new AddressContext())
            {
                city = db.CityInfo.Where(x => x.CityCode.Equals(cityCode)).Single();
            }
            return city;
        }

        public void Delete(City city)
        {
            if (city == null) return;
            using (var db = new AddressContext())
            {
                db.Remove(city);
                db.SaveChanges();
            }
        }

        public void DeleteRange(List<City> citys)
        {
            if (citys == null || citys.Count == 0) return;
            using (var db = new AddressContext())
            {
                db.RemoveRange(citys);
                db.SaveChanges();
            }
        }

        public void Update(City cityNew)
        {
            if (cityNew == null) return;
            using (var db = new AddressContext())
            {
                var cityOld = db.CityInfo
                    .Single(x => x.CityCode.Equals(cityNew.CityCode));
                cityOld = cityNew;
                db.SaveChanges();
            }

        }

        public void AddRelatedEntity()
        {
            using (var db = new AddressContext())
            {
                var county = new County
                {
                    FullName = "Thanh Trì",
                    IsDelete = false,
                };

                var city = db.CityInfo
                    .Include(x => x.County)
                    .First();

                city.County.Add(county);
                db.SaveChanges();
            }
        }

        public void RemoveRelationship()
        {
            using (var db = new AddressContext())
            {
                var city = db.CityInfo
                    //.Include(x => x.County.Where(x => x.Equals.Equals...))
                    .Include(x => x.County)
                    .First(x => x.CityCode == 2);

                var county = city.County.First(countys => countys.FullName.Equals("Thanh Trì"));

                city.County.Remove(county);
                db.SaveChanges();
            }
        }
    }
}
