using System;

namespace Savey.Data.Entities
{
    public partial class Pagos
    {
        public DateTime Fecha { get; set; }
        public int Id { get; set; }
        public decimal Intereses { get; set; }
        public decimal Monto { get; set; }
        public int? NumeroPago { get; set; }
        public int? PrestamoId { get; set; }

        public Prestamos Prestamo { get; set; }
    }
}
