using Microsoft.EntityFrameworkCore.Storage;

namespace Savey.Web.ViewModels
{
    public class DividendsReport
    {
        public int MemberId { get; set; }

        public int Year { get; set; }
        
        public int Month { get; set; }

        public string Member { get; set; }

        public decimal Balance { get; set; }

        public decimal EarningsPercentage { get; set; }

        public decimal Earnings { get; set; }
    }
}