using System;

namespace Savey.Data.Entities
{
    public partial class Transacciones
    {
        public int? CuentaId { get; set; }
        public string Descripcion { get; set; }
        public DateTime? Fecha { get; set; }
        public int Id { get; set; }
        public decimal Monto { get; set; }
        public string Tipo { get; set; }
    }
}
