
using System;

namespace Savey.Web.ViewModels
{
    public class MemberReport
    {
        public int MemberId { get; set; }

        public string Member { get; set; }

        public DateTime StartDate { get; set; }

        public int Investment { get; set; }

        public int Saving { get; set; }

        public int Total { get; set; }
    }
}