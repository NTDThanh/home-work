using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EFCore.Data;
using EFCore.Domain;

namespace Library.API.Controllers
{
    [Route("api/exercises")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly HomeWorkContext _context;

        public ExercisesController(HomeWorkContext context)
        {
            _context = context;
        }

        // GET: api/exercises
        [HttpGet]
        public IEnumerable<Exercises> GetExercises()
        {
            return _context.Exercises;
        }

        // GET: api/exercises/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExercises([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercises = await _context.Exercises.FindAsync(id);

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

            _context.Entry(exercises).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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
        public async Task<IActionResult> PostExercises([FromBody] Exercises exercises)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Exercises.Add(exercises);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExercises", new { id = exercises.Id }, exercises);
        }

        // DELETE: api/exercises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercises([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercises = await _context.Exercises.FindAsync(id);
            if (exercises == null)
            {
                return NotFound();
            }

            _context.Exercises.Remove(exercises);
            await _context.SaveChangesAsync();

            return Ok(exercises);
        }

        private bool ExercisesExists(Guid id)
        {
            return _context.Exercises.Any(e => e.Id == id);
        }
    }
}