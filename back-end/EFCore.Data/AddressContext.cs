using System;
using EFCore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;

namespace EFCore.Data
{
    public class AddressContext : DbContext
    {
        public static readonly LoggerFactory MyConsoleLoggerFactory
          = new LoggerFactory(new[] {
              new ConsoleLoggerProvider((category, level)
                => category == DbLoggerCategory.Database.Command.Name
               && level == LogLevel.Information, true) });

        //public DbSet<City> CityInfo { get; set; }
        //public DbSet<Address> Address { get; set; }

        // LamVu Code
        public DbSet<Comments> Comments { get; set; }
        public DbSet<Answers> Answers { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<ExerciseResult> ExerciseResult { get; set; }
        public DbSet<Exercises> Exercises { get; set; }
        public DbSet<Levels> Levels { get; set; }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<Skills> Skills { get; set; }
        public DbSet<UserGroup> UserGroup { get; set; }
        public DbSet<UserLogin> UserLogin { get; set; }
        public DbSet<Users> Users { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(MyConsoleLoggerFactory)
                .EnableSensitiveDataLogging(true)
                .UseSqlServer(@"Data Source=103.28.37.225;Initial Catalog=EFCore; Persist Security Info=True;User ID=VNETTEST;Password=abc123!");
            //.UseSqlServer(@"Data Source=192.168.6.235\SQLEXPRESS;Initial Catalog=EFCore; Persist Security Info=True;User ID=efcoreadmin;Password=efcorepass");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
