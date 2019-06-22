using System;

namespace Savey.Data.Entities
{
    public class Account
    {
        public int? MemberId { get; set; }
        public DateTime OpeningDate { get; set; }
        public int Id { get; set; }
        public decimal Balance { get; set; }
        public string AccountType { get; set; }
    }
}
