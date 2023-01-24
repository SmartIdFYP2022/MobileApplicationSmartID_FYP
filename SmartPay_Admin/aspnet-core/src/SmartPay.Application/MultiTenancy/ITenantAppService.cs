using Abp.Application.Services;
using SmartPay.MultiTenancy.Dto;

namespace SmartPay.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

