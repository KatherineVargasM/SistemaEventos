namespace SistemaEventos.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Reservacion
    {
        public int ReservacionId { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }

        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public DateTime FechaReservacion { get; set; }
        public string Estado { get; set; } 
    }
}
