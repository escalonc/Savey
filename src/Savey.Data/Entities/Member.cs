using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;

namespace Savey.Data.Entities
{
    public class Member
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        
        public string MiddleName { get; set; }
        
        public string FirstSurname { get; set; }
        
        public string SecondSurname { get; set; }
        
        public DateTime StartDate { get; set; }
        
        
    }
}