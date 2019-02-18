using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Services
{
    public interface IExerciseResultRepository
    {
        #region ExerciseResult
        IEnumerable<ExerciseResult> GetExercisesResults();
        ExerciseResult GetExerciseResult(Guid exerciseId);
        void AddExercise(ExerciseResult exercisesResult);
        void UpdateExercise(ExerciseResult exercisesResult);
        void DeleteExercise(ExerciseResult exercisesResult);
        bool ExercisesResultExists(Guid exercisesResultId);
        #endregion
        bool Save();
    }
}
