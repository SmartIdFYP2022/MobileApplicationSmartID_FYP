using Abp.Application.Services;
using SmartPay.UserInfo.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.UserInfo
{
    public interface IUserInfoService : IAsyncCrudAppService<UserInfoDto, long>
    {
    }
}
