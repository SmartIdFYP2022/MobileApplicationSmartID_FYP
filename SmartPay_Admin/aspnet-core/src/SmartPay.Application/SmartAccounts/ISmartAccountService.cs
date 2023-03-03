using Abp.Application.Services;
using SmartPay.SmartAccounts.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.SmartAccounts
{
    public interface ISmartAccountService: IAsyncCrudAppService<SmartAccountDto,long>
    {
        Task PointTransferToUserByAccountantAsync(TransferPointDto transferPointDto);
    }
}
