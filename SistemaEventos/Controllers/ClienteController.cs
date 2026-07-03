
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaEventos.Models;
using SistemaEventos.Data;

public class ClienteController : Controller
{
    private readonly ApplicationDbContext _context;

    public ClienteController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: CLIENTES
    public async Task<IActionResult> Index()    
    {
        return View(await _context.Clientes.ToListAsync());
    }

    // GET: CLIENTES/Details/5
    public async Task<IActionResult> Details(int? clienteid)
    {
        if (clienteid == null)
        {
            return NotFound();
        }

        var cliente = await _context.Clientes
            .FirstOrDefaultAsync(m => m.ClienteId == clienteid);
        if (cliente == null)
        {
            return NotFound();
        }

        return View(cliente);
    }

    // GET: CLIENTES/Create
    public IActionResult Create()
    {
        return View();
    }

    // POST: CLIENTES/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("ClienteId,Nombre,Apellido,Email,Telefono")] Cliente cliente)
    {
        if (ModelState.IsValid)
        {
            _context.Add(cliente);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        return View(cliente);
    }

    // GET: CLIENTES/Edit/5
    public async Task<IActionResult> Edit(int? clienteid)
    {
        if (clienteid == null)
        {
            return NotFound();
        }

        var cliente = await _context.Clientes.FindAsync(clienteid);
        if (cliente == null)
        {
            return NotFound();
        }
        return View(cliente);
    }

    // POST: CLIENTES/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(int? clienteid, [Bind("ClienteId,Nombre,Apellido,Email,Telefono")] Cliente cliente)
    {
        if (clienteid != cliente.ClienteId)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(cliente);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(cliente.ClienteId))
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
        return View(cliente);
    }

    // GET: CLIENTES/Delete/5
    public async Task<IActionResult> Delete(int? clienteid)
    {
        if (clienteid == null)
        {
            return NotFound();
        }

        var cliente = await _context.Clientes
            .FirstOrDefaultAsync(m => m.ClienteId == clienteid);
        if (cliente == null)
        {
            return NotFound();
        }

        return View(cliente);
    }

    // POST: CLIENTES/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int? clienteid)
    {
        var cliente = await _context.Clientes.FindAsync(clienteid);
        if (cliente != null)
        {
            _context.Clientes.Remove(cliente);
        }

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    private bool ClienteExists(int? clienteid)
    {
        return _context.Clientes.Any(e => e.ClienteId == clienteid);
    }
}
