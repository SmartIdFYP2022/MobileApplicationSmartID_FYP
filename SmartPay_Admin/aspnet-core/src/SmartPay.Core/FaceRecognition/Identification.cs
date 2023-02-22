using Abp.Domain.Entities.Auditing;
using SmartPay.Transactions;
using SmartPay.UserInformation;
using SmartPay.Vouchers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.FaceRecognition
{
    public class Identification : AuditedEntity<long>
    {
        public string ImagePath { get; set; }
        public long? UserId { get; set; }
        public UserInfo User { get; set; }
    }
}
