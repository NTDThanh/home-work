using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Data;
using EFCore.Domain;
using Microsoft.EntityFrameworkCore;

namespace Library.API.Services
{
    public class ExcercisesRepository : IExcercisesRepository
    {
        HomeWorkContext _context;
        public ExcercisesRepository(HomeWorkContext context)
        {
            _context = context;
        }

        public void AddExercises(Exercises exercises)
        {
            if (exercises.Id == Guid.Empty)
            {
                exercises.Id = Guid.NewGuid();
            }

            _context.Add(exercises);
        }

        public void AddManyExercises(IEnumerable<Exercises> listExercises)
        {
            foreach (var exercises in listExercises)
            {
                exercises.Id = new Guid();
            }

            _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            _context.AddRange(listExercises);
        }

        public void DeleteExercises(Exercises exercises)
        {
            _context.Remove(exercises);
        }

        public bool ExercisesExists(Guid exercisesId)
        {
            return _context.Exercises.Any(x => x.Id.Equals(exercisesId));
        }

        public Task FindAsync(Guid id)
        {
          return  _context.Exercises.FindAsync(id);
        }

        public IEnumerable<Exercises> GetCollectionQuestions(IEnumerable<Guid> ids)
        {
            return _context.Exercises.Where(x => ids.Contains(x.Id));
        }

        public IEnumerable<Exercises> GetExercises()
        {
            return _context.Exercises;
        }

        public Exercises GetExercises(Guid exercisesId)
        {
            return _context.Exercises.Single(x => x.Id == exercisesId);
        }

        public void UpdateExercises(Exercises exercises)
        {
            throw new NotImplementedException();
        }
    }
}
