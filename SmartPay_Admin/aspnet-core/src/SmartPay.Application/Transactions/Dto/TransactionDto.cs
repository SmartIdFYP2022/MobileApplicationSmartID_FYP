using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Transactions.Dto
{
    public class TransactionDto:AuditedEntityDto<Guid>
    {
        public long DepartmentId { get; set; }

        public decimal PrincipalAmount { get; set; }

        public long SourceAccountId { get; set; }

        public long DestinationAccountId { get; set; }
    }
}
