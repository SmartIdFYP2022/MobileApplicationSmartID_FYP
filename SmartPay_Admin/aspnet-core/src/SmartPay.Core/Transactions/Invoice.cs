using Abp.Domain.Entities.Auditing;
using SmartPay.UserInformation;
using SmartPay.Vouchers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Transactions
{
    public class Invoice : AuditedEntity<long>
    {
        public long? VoucherId { get; set; }
        public long? UserId { get; set; }
        public long Amount { get; set; }
        public AuthoizationSource AuthorizationSource { get; set; }
        public Receipt Receipt { get; set; }
        public UserInfo User { get; set; }
    }
    public enum AuthoizationSource
    {
        Face = 1,
        Card = 2,
        Manual =3
    }
}
