using System;

namespace Savey.Data.Entities
{
    public partial class Payment
    {
        public DateTime Date { get; set; }
        public int Id { get; set; }
        public decimal Interest { get; set; }
        public decimal Amount { get; set; }

        public int MemberId { get; set; }
        public int? LoanId { get; set; }

        public Loan Loan { get; set; }
    }
}
