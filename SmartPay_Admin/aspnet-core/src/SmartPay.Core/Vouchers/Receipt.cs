using Abp.Domain.Entities.Auditing;
using SmartPay.UserInformation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Vouchers
{
    public class Receipt : AuditedEntity<long>
    {
        public string VoucherNumber { get; set; }
        public DateTime Date { get; set;}
        public long TotalAmount { get; set;}
        public VoucherStatus VoucherStatus { get; set; }
        public long? UserId { get; set; }
        public UserInfo User { get; set; }
    }
    public enum VoucherStatus
    {
        Approved = 1,
        UnApproved = 2
    }
}
