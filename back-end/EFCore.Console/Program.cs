using EFCore.Data.DataAccess.Repository;
using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;
namespace EFCore.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // INSERT DATA TEMPLATE
                //InitialCountyData();
                //AddSimpleCity();
                // TAG[Save Related Data]
                //AddSimpleCounty();
                //SaveRelatedData();
                //AddRelatedCity();
                //ChangingRelationshipsCounty();
                RemovingRelationships();
            }
            catch (Exception ex)
            {
                WriteLine(ex.Message);
                throw ex;
            }
            finally
            {
                ReadKey();
            }

        }

        static void InitialCountyData()
        {
            var countyRepository = new CountyRepository();
            countyRepository.AddDataTemplate();
        }

        static void AddSimpleCity()
        {
            var city = new City
            {
                CityCode = 6,
                FullName = "Ninh Bình",
                IsDelete = false,
                NameFormated = "Ninh_Bình_6",
            };

            var cityRepo = new CityRepository();
            cityRepo.Add(new List<City> { city });
        }

        // [TAG]Save Related Data
        static void AddSimpleCounty()
        {
            var city = new City
            {
                CityCode = 9,
                FullName = "Hà Giang",
                IsDelete = false,
                NameFormated = "Hà_Giang_9",
            };

            var county = new County()
            {
                City = city,
                FullName = "County_1" + city.FullName,
                NameFormated = "County_1" + city.NameFormated,
                IsDelete = false,
            };

            var countyRepo = new CountyRepository();
            countyRepo.Add(new List<County> { county });
        }

        // [TAG]Save Related Data
        static void SaveRelatedData()
        {
            var countys = new List<County> {
                new County{FullName = "TP.Hạ Long", IsDelete = false,NameFormated="TP.Hạ Long" },
                new County{FullName = "Móng Cái", IsDelete = false,NameFormated="Móng Cái" },
                new County{FullName = "Cẩm Phả", IsDelete = false,NameFormated="Cẩm Phả" },
            };
            var city = new City
            {
                CityCode = 8,
                FullName = "Quảng Ninh",
                IsDelete = false,
                NameFormated = "Quảng_Ninh_8",
                County = countys,
            };

            var cityRepo = new CityRepository();

            cityRepo.Add(new List<City> { city });
        }

        // [TAG] Adding a related entity
        static void AddRelatedCity()
        {
            var cityRepo = new CityRepository();
            cityRepo.AddRelatedEntity();
        }

        // [TAG] Changing relationships
        static void ChangingRelationshipsCounty()
        {
            var countyRepo = new CountyRepository();
            countyRepo.ChangeRelationship();
        }
        //[TAG] Removing relationships
        static void RemovingRelationships()
        {
            var cityRepo = new CityRepository();
            cityRepo.RemoveRelationship();
        }
        // [Todo] Eager loading
        // [Todo] Explicit loading
        // [Todo] Lazy loading
    }
}
