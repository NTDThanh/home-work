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
        public DbSet<ExercisesQuestions> ExercisesQuestions { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(MyConsoleLoggerFactory)
                .EnableSensitiveDataLogging(true)
                .UseSqlServer(@"data source = DESKTOP-A9IR48I\SQLEXPRESS;initial catalog = dbtest;persist security info=True; 
   Integrated Security=SSPI;");
            //.UseSqlServer(@"Data Source=192.168.6.235\SQLEXPRESS;Initial Catalog=EFCore; Persist Security Info=True;User ID=efcoreadmin;Password=efcorepass");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExercisesQuestions>()
           .HasKey(t => new { t.ExercisesId, t.QuestionsId });

            modelBuilder.Entity<ExercisesQuestions>()
                .HasOne(pt => pt.Exercises)
                .WithMany(p => p.ExercisesQuestions)
                .HasForeignKey(pt => pt.ExercisesId);

            modelBuilder.Entity<ExercisesQuestions>()
                .HasOne(pt => pt.Questions)
                .WithMany(t => t.ExercisesQuestions)
                .HasForeignKey(pt => pt.QuestionsId);
        }
    }
}
