using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.SmartAccounts
{
    public class Account: AuditedEntity<long>
    {
        public long UserId { get; set; }

        public int PhoneNumber { get; set; }

        public decimal AccountBlance { get; set; }

        public bool IsActive { get; set; }

        public string AccountType { get; set; }
    }
}
