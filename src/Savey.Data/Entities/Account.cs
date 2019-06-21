using System;

namespace Savey.Data.Entities
{
    public partial class Cuentas
    {
        public int? AfiliadoId { get; set; }
        public DateTime FechaApertura { get; set; }
        public int Id { get; set; }
        public int NumeroCuenta { get; set; }
        public decimal? Saldo { get; set; }
        public string Tipo { get; set; }
    }
}
