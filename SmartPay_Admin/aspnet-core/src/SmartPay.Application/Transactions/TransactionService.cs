using Abp.Application.Services;
using Abp.Domain.Repositories;
using SmartPay.Transactions.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Transactions
{
    public class TransactionService : AsyncCrudAppService<Transaction, TransactionDto, Guid>, ITransactionService
    {
        public TransactionService(IRepository<Transaction, Guid> repository) : base(repository)
        {
        }
    }
}
