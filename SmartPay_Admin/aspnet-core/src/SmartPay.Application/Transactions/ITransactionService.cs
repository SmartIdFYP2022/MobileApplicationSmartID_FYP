using Abp.Application.Services;
using SmartPay.Transactions.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Transactions
{
    public interface ITransactionService: IAsyncCrudAppService<TransactionDto,Guid>
    {
    }
}
