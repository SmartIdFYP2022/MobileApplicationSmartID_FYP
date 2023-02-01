using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using SmartPay.Authorization;
using SmartPay.SmartAccounts.Dto;
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
        public SmartAccountService(IRepository<Account, long> repository) : base(repository)
        {
        }
    }
}
