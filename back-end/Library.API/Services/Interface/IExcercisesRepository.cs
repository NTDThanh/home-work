using System;
using EFCore.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library.API.Services
{
    public interface IExcercisesRepository
    {
        IEnumerable<Exercises> GetExercises();
        IEnumerable<Exercises> GetCollectionQuestions(IEnumerable<Guid> ids);
        Exercises GetExercises(Guid exercisesId);
        void AddExercises(Exercises exercises);
        void AddManyExercises(IEnumerable<Exercises> exercises);
        void UpdateExercises(Exercises exercises);
        void DeleteExercises(Exercises exercises);
        bool ExercisesExists(Guid exercisesId);
        Task<Exercises> FindAsync(Guid id);
        bool Save();
    }
}