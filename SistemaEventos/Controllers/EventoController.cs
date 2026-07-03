
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEventos.Models;
using SistemaEventos.Data;

public class EventoController : Controller
{
    private readonly ApplicationDbContext _context;

    public EventoController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: EVENTOS
    public async Task<IActionResult> Index()    
    {
        return View(await _context.Eventos.ToListAsync());
    }

    // GET: EVENTOS/Details/5
    public async Task<IActionResult> Details(int? eventoid)
    {
        if (eventoid == null)
        {
            return NotFound();
        }

        var evento = await _context.Eventos
            .FirstOrDefaultAsync(m => m.EventoId == eventoid);
        if (evento == null)
        {
            return NotFound();
        }

        return View(evento);
    }

    // GET: EVENTOS/Create
    public IActionResult Create()
    {
        return View();
    }

    // POST: EVENTOS/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("EventoId,Nombre,Descripcion,Fecha,Ubicacion")] Evento evento)
    {
        if (ModelState.IsValid)
        {
            _context.Add(evento);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        return View(evento);
    }

    // GET: EVENTOS/Edit/5
    public async Task<IActionResult> Edit(int? eventoid)
    {
        if (eventoid == null)
        {
            return NotFound();
        }

        var evento = await _context.Eventos.FindAsync(eventoid);
        if (evento == null)
        {
            return NotFound();
        }
        return View(evento);
    }

    // POST: EVENTOS/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int? eventoid, [Bind("EventoId,Nombre,Descripcion,Fecha,Ubicacion")] Evento evento)
    {
        if (eventoid != evento.EventoId)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(evento);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventoExists(evento.EventoId))
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
        return View(evento);
    }

    // GET: EVENTOS/Delete/5
    public async Task<IActionResult> Delete(int? eventoid)
    {
        if (eventoid == null)
        {
            return NotFound();
        }

        var evento = await _context.Eventos
            .FirstOrDefaultAsync(m => m.EventoId == eventoid);
        if (evento == null)
        {
            return NotFound();
        }

        return View(evento);
    }

    // POST: EVENTOS/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int? eventoid)
    {
        var evento = await _context.Eventos.FindAsync(eventoid);
        if (evento != null)
        {
            _context.Eventos.Remove(evento);
        }

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    private bool EventoExists(int? eventoid)
    {
        return _context.Eventos.Any(e => e.EventoId == eventoid);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Evento>>> GetEventos()
    {
        return Ok(await _context.Eventos.ToListAsync());
    }
}
