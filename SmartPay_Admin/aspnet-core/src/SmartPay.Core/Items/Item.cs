using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Items
{
    public class Item : AuditedEntity<long>
    {
        public string ItemName { get; set; }
        public long Price { get; set; }
        public ItemModule ItemModule { get; set; } // check item of book shop, cafe etc
    }
    public enum ItemModule
    {
        BookShop = 1,
        Cafe = 2
    }
}
