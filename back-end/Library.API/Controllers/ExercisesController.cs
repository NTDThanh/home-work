using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EFCore.Data;
using EFCore.Domain;
using Library.API.Services;
using Library.API.Helpers;
using Microsoft.AspNetCore.Cors;

namespace Library.API.Controllers
{
    [Route("api/exercises")]
    [ApiController]
    [EnableCors("AllowSpecificOrigin")]
    public class ExercisesController : ControllerBase
    {
        private readonly IExcercisesRepository exercisesRepository;
        private readonly HomeWorkContext context;

        public ExercisesController(IExcercisesRepository _exercisesRepository, HomeWorkContext _context)
        {
            exercisesRepository = _exercisesRepository;
            context = _context;
        }

        // GET: api/exercises
        [HttpGet]
        public IEnumerable<Exercises> GetExercises()
        {
            return exercisesRepository.GetExercises();
        }

        // GET: api/exercises/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExercises([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercises = await exercisesRepository.FindAsync(id);

            if (exercises == null)
            {
                return NotFound();
            }

            return Ok(exercises);
        }

        // PUT: api/exercises/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExercises([FromRoute] Guid id, [FromBody] Exercises exercises)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exercises.Id)
            {
                return BadRequest();
            }

            context.Entry(exercises).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExercisesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/exercises
        [HttpPost]
        public IActionResult PostExercises([FromBody] Exercises exercises)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            #region Mock data
            var levelBeginer = new Levels()
            {
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Name = "Beginer",
                Description = "Beginer",
                IsDelete = false,
            };

            var levelIntermediate = new Levels()
            {
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Name = "Intermediate",
                Description = "Intermediate",
                IsDelete = false,
            };

            var levelAdvanced = new Levels()
            {
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Name = "Advanced",
                Description = "Advanced",
                IsDelete = false,
            };

            List<Exercises> exercisesList = new List<Exercises>()
            {
                new Exercises()
            {
                Id = new Guid(),
                Name = "Styling React Components",
                IsDelete = false,
                Image = ImageBase64.RandomImage(),
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Level =levelBeginer,
            },
        new Exercises()
            {
                Id = new Guid(),
                Name = "Securing React Apps with Auth0",
                IsDelete = false,
                Image =  ImageBase64.RandomImage(),
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Level =levelBeginer,
            },
        new Exercises()
            {
                Id = new Guid(),
                Name = "Clean Architecture: Patterns, Practices, and Principles",
                IsDelete = false,
                Image =  ImageBase64.RandomImage(),
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                                Level =levelAdvanced,
            },
        new Exercises()
            {
                Id = new Guid(),
                Name = "The MVC Request Life Cycle",
                IsDelete = false,
                Image =  ImageBase64.RandomImage(),
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Level = levelIntermediate,
            },
        new Exercises()
            {
                Id = new Guid(),
                Name = "Understanding OWIN and Katana",
                IsDelete = false,
                Image =  ImageBase64.RandomImage(),
                CreateBy = new Guid("23e47499-948c-4e09-9c14-f5aeb2d27bd9"),
                CreateAt = DateTime.Now,
                Level = levelIntermediate,
            }
        };

            #endregion
            exercisesList.Add(exercises);

            exercisesRepository.AddManyExercises(exercisesList);

            exercisesRepository.Save();

            return CreatedAtAction("GetExercises", new
            {
                id = exercises.Id
            }, exercises);
        }

        // DELETE: api/exercises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercises([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercises = await context.Exercises.FindAsync(id);
            if (exercises == null)
            {
                return NotFound();
            }

            context.Exercises.Remove(exercises);
            await context.SaveChangesAsync();

            return Ok(exercises);
        }

        private bool ExercisesExists(Guid id)
        {
            return context.Exercises.Any(e => e.Id == id);
        }
    }
}


