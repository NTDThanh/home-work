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
    [Route("api/[controller]")]
    [ApiController]
    public class LevelsController : ControllerBase
    {
        private readonly HomeWorkContext _context;

        public LevelsController(HomeWorkContext context)
        {
            _context = context;
        }

        // GET: api/Levels
        [HttpGet]
        public IEnumerable<Levels> GetLevels()
        {
            return _context.Levels;
        }

        // GET: api/Levels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLevels([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var levels = await _context.Levels.FindAsync(id);

            if (levels == null)
            {
                return NotFound();
            }

            return Ok(levels);
        }

        // PUT: api/Levels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLevels([FromRoute] Guid id, [FromBody] Levels levels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != levels.Id)
            {
                return BadRequest();
            }

            _context.Entry(levels).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LevelsExists(id))
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

        // POST: api/Levels
        [HttpPost]
        public async Task<IActionResult> PostLevels([FromBody] Levels levels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Levels.Add(levels);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLevels", new { id = levels.Id }, levels);
        }

        // DELETE: api/Levels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLevels([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var levels = await _context.Levels.FindAsync(id);
            if (levels == null)
            {
                return NotFound();
            }

            _context.Levels.Remove(levels);
            await _context.SaveChangesAsync();

            return Ok(levels);
        }

        private bool LevelsExists(Guid id)
        {
            return _context.Levels.Any(e => e.Id == id);
        }
    }
}