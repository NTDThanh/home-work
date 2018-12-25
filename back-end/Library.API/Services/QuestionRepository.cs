using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Data;
using EFCore.Domain;
using Microsoft.EntityFrameworkCore;

namespace Library.API.Services
{
    public class QuestionRepository : IQuestionRepository
    {
        HomeWorkContext _context;
        public QuestionRepository(HomeWorkContext context)
        {
            _context = context;
        }

        #region Question
        public void AddQuestion(Questions question)
        {
            if (question.Id == Guid.Empty)
            {
                question.Id = Guid.NewGuid();
            }
            if (question.Answers != null)
            {
                foreach (var item in question.Answers)
                {
                    if (item.Id == Guid.Empty)
                    {
                        item.Id = Guid.NewGuid();
                    }
                }
            }
            _context.Add(question);
        }

        public void AddManyQuestion(IEnumerable<Questions> questions)
        {
            _context.AddRange(questions);
        }

        public void DeleteQuestion(Questions question)
        {
            _context.Remove(question);
        }

        public Questions GetQuestion(Guid questionId)
        {
            return _context.Questions
                .FirstOrDefault(x => x.Id == questionId && !x.IsDelete);
        }

        public void UpdateQuestion(Questions questions)
        {
            //[Todo]
        }

        public IEnumerable<Questions> GetQuestionsOfExercise(Guid exersiceId)
        {
            return _context.Questions
                .Where(x => x.ExercisesQuestions
                    .Any(y => y.ExercisesId.Equals(exersiceId)))
                .ToArray();
        }

        public bool QuestionsExists(Guid questionsId)
        {
            return _context.Questions.Any(x => x.Id.Equals(questionsId));
        }

        public IEnumerable<Questions> GetQuestions()
        {
            return _context.Questions.ToArray();
        }
        #endregion

        #region Answer
        public void AddAnswer(Answers answers)
        {
            if (answers.Id == Guid.Empty)
            {
                answers.Id = Guid.NewGuid();
            }
            _context.Add(answers);
        }

        public bool AnswersExists(Guid answersId)
        {
            return _context.Answers.Any(x => x.Id.Equals(answersId));
        }

        public void DeleteAnswer(Answers answers)
        {
            _context.Remove(answers);
        }

        public Answers GetAnswer(Guid answerId)
        {
            return _context.Answers.FirstOrDefault(x => x.Id.Equals(answerId));
        }

        public void UpdateAnswer(Answers answers)
        {
            throw new NotImplementedException();
        }
        #endregion

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
