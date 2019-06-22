namespace Savey.Web.ViewModels
{
    public class LoanViewModel
    {
        public int? Id { get; set; }

        public int MemberId { get; set; }

        public decimal Balance { get; set; }

        public decimal Amount { get; set; }

        public bool IsPayed { get; set; }

        public decimal AnnualInterest { get; set; }

        public string LoanType { get; set; }

        public int Period { get; set; }
    }
}