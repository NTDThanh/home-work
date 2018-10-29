using System;
using EFCore.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;

namespace EFCore.Data
{
    public class HomeWorkContext : DbContext
    {
        public HomeWorkContext(DbContextOptions<HomeWorkContext> options) : base(options) { }
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
                .UseSqlServer(@"Data Source=103.28.37.225;Initial Catalog=EFCore; Persist Security Info=True;User ID=VNETTEST;Password=abc123!");
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
