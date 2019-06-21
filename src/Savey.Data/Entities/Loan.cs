using System;
using System.Collections.Generic;

namespace Savey.Data.Entities
{
    public partial class Prestamos
    {
        public Prestamos()
        {
            Pagos = new HashSet<Pagos>();
        }

        public int? AfiliadoId { get; set; }
        public bool? EstaPagado { get; set; }
        public DateTime Fecha { get; set; }
        public int Id { get; set; }
        public decimal? Monto { get; set; }
        public int Periodo { get; set; }
        public decimal Saldo { get; set; }

        public ICollection<Pagos> Pagos { get; set; }
    }
}
