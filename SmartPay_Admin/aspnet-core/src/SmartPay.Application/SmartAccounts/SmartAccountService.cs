using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using SmartPay.Authorization;
using SmartPay.SmartAccounts.Dto;
using SmartPay.Transactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.SmartAccounts
{
    [AbpAuthorize(PermissionNames.Pages_Accountants)]
    public class SmartAccountService : AsyncCrudAppService<Account, SmartAccountDto, long>, ISmartAccountService
    {
        private readonly IRepository<Account,long> _accountRepository;
        private readonly IRepository<Transaction,Guid> _transactionRepository;

        public SmartAccountService(IRepository<Account, long> repository,
            IRepository<Account,long> accountRepository,IRepository<Transaction,Guid> transactionRepository) : base(repository)
        {
            _accountRepository = accountRepository;
            _transactionRepository = transactionRepository;
        }

        [AbpAuthorize(PermissionNames.Pages_Accountants)]

        public async Task PointTransferToUserByAccountantAsync(long soucrseAccId,long destinationAccId,decimal amountTranfered )
        {
            Account destinationaccount = await _accountRepository.GetAsync(destinationAccId);
            Account sourceaccount = await _accountRepository.GetAsync(soucrseAccId);
            if(destinationaccount.IsActive)
            {
                destinationaccount.AccountBlance += amountTranfered;

                Transaction transaction = new Transaction() 
                {
                   SourceAccountId = soucrseAccId,
                   DestinationAccountId = destinationAccId,
                   CreationTime = DateTime.Now,
                   CreatorUserId= soucrseAccId,
                   PrincipalAmount = amountTranfered,
                   DepartmentId = 1,
                };

                await _transactionRepository.InsertAsync(transaction);
                await _accountRepository.UpdateAsync(destinationaccount);
            }
        }

    }
}
