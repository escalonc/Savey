using System;
using Microsoft.CodeAnalysis.Operations;

namespace Savey.Web.ViewModels
{
    public class TransactionsModel
    {
        public decimal Amount { get; set; }

        public string Type { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public int AccountId { get; set; }
    }
}