using Abp.Application.Services;
using Abp.Authorization;
using SmartPay.Authorization;
using SmartPay.Transactions.Dto;
using SmartPay.Transactions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartPay.UserInfo.Dto;
using SmartPay.UserInformation;
using Abp.Domain.Repositories;
using SmartPay.SmartAccounts;

namespace SmartPay.UserInfo
{
    [AbpAuthorize(PermissionNames.Pages_Accountants)]
    public class UserInfoService: AsyncCrudAppService<SmartPay.UserInformation.UserInfo, UserInfoDto, long>, IUserInfoService
    {
        public UserInfoService(IRepository<SmartPay.UserInformation.UserInfo, long> repository) : base(repository)
        {
          
        }
    }
}
