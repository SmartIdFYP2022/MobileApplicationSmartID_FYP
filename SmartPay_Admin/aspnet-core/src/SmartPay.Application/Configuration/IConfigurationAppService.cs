using System.Threading.Tasks;
using SmartPay.Configuration.Dto;

namespace SmartPay.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
