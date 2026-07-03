using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEventos.Models;
using SistemaEventos.Data;

public class ReservacionController : Controller
{
    private readonly ApplicationDbContext _context;

    public ReservacionController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: RESERVACIONS
    public async Task<IActionResult> Index()
    {
        return View(await _context.Reservaciones.ToListAsync());
    }

    // GET: RESERVACIONS/Details/5
    public async Task<IActionResult> Details(int? reservacionid)
    {
        if (reservacionid == null)
        {
            return NotFound();
        }

        var reservacion = await _context.Reservaciones
            .FirstOrDefaultAsync(m => m.ReservacionId == reservacionid);
        if (reservacion == null)
        {
            return NotFound();
        }

        return View(reservacion);
    }

    // GET: RESERVACIONS/Create
    public IActionResult Create()
    {
        return View();
    }

    // POST: RESERVACIONS/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("ReservacionId,EventoId,ClienteId,FechaReservacion,Estado")] Reservacion reservacion)
    {
        if (ModelState.IsValid)
        {
            _context.Add(reservacion);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        return View(reservacion);
    }

    // GET: RESERVACIONS/Edit/5
    public async Task<IActionResult> Edit(int? reservacionid)
    {
        if (reservacionid == null)
        {
            return NotFound();
        }

        var reservacion = await _context.Reservaciones.FindAsync(reservacionid);
        if (reservacion == null)
        {
            return NotFound();
        }
        return View(reservacion);
    }

    // POST: RESERVACIONS/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int? reservacionid, [Bind("ReservacionId,EventoId,ClienteId,FechaReservacion,Estado")] Reservacion reservacion)
    {
        if (reservacionid != reservacion.ReservacionId)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(reservacion);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservacionExists(reservacion.ReservacionId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }
        return View(reservacion);
    }

    // GET: RESERVACIONS/Delete/5
    public async Task<IActionResult> Delete(int? reservacionid)
    {
        if (reservacionid == null)
        {
            return NotFound();
        }

        var reservacion = await _context.Reservaciones
            .FirstOrDefaultAsync(m => m.ReservacionId == reservacionid);
        if (reservacion == null)
        {
            return NotFound();
        }

        return View(reservacion);
    }

    // POST: RESERVACIONS/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int? reservacionid)
    {
        var reservacion = await _context.Reservaciones.FindAsync(reservacionid);
        if (reservacion != null)
        {
            _context.Reservaciones.Remove(reservacion);
        }

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    private bool ReservacionExists(int? reservacionid)
    {
        return _context.Reservaciones.Any(e => e.ReservacionId == reservacionid);
    }

    [HttpGet]
    [Route("reservacion")]
    public async Task<ActionResult<IEnumerable<Reservacion>>> GetReservaciones()
    {
        return Ok(await _context.Reservaciones
            .Include(r => r.Evento)
            .Include(r => r.Cliente)
            .ToListAsync());
    }

    [HttpDelete]
    [Route("reservacion/{id}")]
    public async Task<IActionResult> DeleteReservacion(int id)
    {
        var reservacion = await _context.Reservaciones.FindAsync(id);
        if (reservacion == null) return NotFound();
        _context.Reservaciones.Remove(reservacion);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}