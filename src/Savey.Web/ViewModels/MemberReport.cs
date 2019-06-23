
using System;

namespace Savey.Web.ViewModels
{
    public class MemberReport
    {
        public int MemberId { get; set; }

        public string Member { get; set; }

        public DateTime? StartDate { get; set; }

        public decimal? Investment { get; set; }

        public decimal? Saving { get; set; }

        public decimal? Total { get; set; }
    }
}