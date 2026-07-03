using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEventos.Data;
using SistemaEventos.Models;

namespace SistemaEventos.Controllers
{
    [ApiController]
    [Route("evento")]
    public class EventoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EventoController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /evento
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Evento>>> GetEventos()
        {
            return Ok(await _context.Eventos.ToListAsync());
        }

        // GET: /evento/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Evento>> GetEventoById(int id)
        {
            var evento = await _context.Eventos.FindAsync(id);

            if (evento == null)
            {
                return NotFound();
            }

            return Ok(evento);
        }

        // POST: /evento
        [HttpPost]
        public async Task<ActionResult<Evento>> CreateEvento(Evento evento)
        {
            _context.Eventos.Add(evento);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEventoById),
                new { id = evento.EventoId }, evento);
        }

        // PUT: /evento/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvento(int id, Evento evento)
        {
            if (id != evento.EventoId)
            {
                return BadRequest();
            }

            _context.Entry(evento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Eventos.Any(e => e.EventoId == id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // DELETE: /evento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvento(int id)
        {
            var evento = await _context.Eventos.FindAsync(id);

            if (evento == null)
            {
                return NotFound();
            }

            _context.Eventos.Remove(evento);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}