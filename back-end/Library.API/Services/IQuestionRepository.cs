using EFCore.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.API.Services
{
    public interface IQuestionRepository
    {
        #region Questions
        IEnumerable<Questions> GetQuestions();
        IEnumerable<Questions> GetCollectionQuestions(IEnumerable<Guid> ids);
        IEnumerable<Questions> GetQuestionsOfExercise(Guid exersiceId);
        Questions GetQuestion(Guid questionId);
        void AddQuestion(Questions questions);
        void AddManyQuestion(IEnumerable<Questions> questions);
        void UpdateQuestion(Questions questions);
        void DeleteQuestion(Questions questions);
        bool QuestionsExists(Guid questionsId);
        #endregion

        #region Answer
        Answers GetAnswer(Guid answerId);
        void AddAnswer(Answers answers);
        void UpdateAnswer(Answers answers);
        void DeleteAnswer(Answers answers);
        bool AnswersExists(Guid answersId);
        #endregion
        bool Save();
    }
}
