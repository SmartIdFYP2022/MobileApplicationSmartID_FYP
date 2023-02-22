using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartPay.Items;

namespace SmartPay.Transactions
{
    public class InvoiceLines : AuditedEntity<long>
    {
        public Item Items { get; set; }
        public Invoice Invoice { get; set; }
        public long? ItemId { get; set; }
        public long? InvoiceId { get; set; }
        public long Price { get; set; }
        public int Quantity { get; set; }

    }
}
