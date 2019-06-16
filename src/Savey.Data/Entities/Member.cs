using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;

namespace Savey.Data.Entities
{
    [Table("AFILIADOS", Schema = "SAVEY_APP")]
    public class Member
    {
        [Column("ID")]
        public int Id { get; set; }

        [Column("PRIMER_NOMBRE")]
        public string FirstName { get; set; }

        [Column("SEGUNDO_NOMBRE")]
        public string MiddleName { get; set; }

        [Column("PRIMER_APELLIDO")]
        public string FirstSurname { get; set; }

        [Column("SEGUNDO_APELLIDO")]
        public string SecondSurname { get; set; }

        [Column("FECHA_INICIO_EMPRESA")]
        public DateTime StartDate { get; set; }
        
        
    }
}