using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SmartPay.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.SmartAccounts.Dto
{
    [AutoMapFrom(typeof(Account))]
    public class SmartAccountDto:AuditedEntityDto<long>
    {
        public long UserId { get; set; }

        public int PhoneNumber { get; set; }

        public decimal AccountBlance { get; set; }

        public bool IsActive { get; set; }

        public string AccountType { get; set; }
    }
}
