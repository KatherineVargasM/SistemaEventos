namespace SistemaEventos.Models
{
    public class Evento
    {
        public int EventoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime Fecha { get; set; }
        public string Ubicacion { get; set; }
    }
}
