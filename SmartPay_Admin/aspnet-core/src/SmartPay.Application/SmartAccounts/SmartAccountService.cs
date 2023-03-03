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

        public async Task PointTransferToUserByAccountantAsync(TransferPointDto transferPointDto)
        {
            var accounts =  await _accountRepository.GetAllListAsync();

            Account sourceaccount = accounts.FirstOrDefault(x => x.UserId == transferPointDto.SoucrseAccId);
            Account destinationaccount = accounts.FirstOrDefault(x => x.UserId == transferPointDto.DestinationAccId);

            if (destinationaccount.IsActive)
            {
                sourceaccount.AccountBlance -= destinationaccount.AccountBlance;
                destinationaccount.AccountBlance += transferPointDto.AmountTranfered;

                Transaction transaction = new Transaction() 
                {
                   SourceAccountId = transferPointDto.SoucrseAccId,
                   DestinationAccountId = transferPointDto.DestinationAccId,
                   CreationTime = DateTime.Now,
                   CreatorUserId= transferPointDto.SoucrseAccId,
                   PrincipalAmount = transferPointDto.AmountTranfered,
                   DepartmentId = 1,
                };

                await _transactionRepository.InsertAsync(transaction);
                await _accountRepository.UpdateAsync(destinationaccount);
            }
        }

    }
}
