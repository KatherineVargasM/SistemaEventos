using Microsoft.EntityFrameworkCore;
using SistemaEventos.Models;

namespace SistemaEventos.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Reservacion> Reservaciones { get; set; }
    }
}
