using System;

namespace Savey.Data.Entities
{
    public class Transaction
    {
        public int? AccountId { get; set; }
        public string Description { get; set; }
        public DateTime? Date { get; set; }
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public string Type { get; set; }
    }
}
