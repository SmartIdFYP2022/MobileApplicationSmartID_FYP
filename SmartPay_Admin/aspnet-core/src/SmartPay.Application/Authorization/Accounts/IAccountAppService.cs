using System.Threading.Tasks;
using Abp.Application.Services;
using SmartPay.Authorization.Accounts.Dto;

namespace SmartPay.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
