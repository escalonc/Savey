using System;
using System.Collections.Generic;

namespace Savey.Data.Entities
{
    public class Loan
    {
        public Loan()
        {
            Payments = new HashSet<Payment>();
        }

        public int Id { get; set; }
        public int? MemberId { get; set; }
        public bool? IsPayed { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public int Period { get; set; }
        public decimal Balance { get; set; }
        public decimal AnnualInterest { get; set; }
        public string LoanType { get; set; }

        public ICollection<Payment> Payments { get; set; }
    }
}
