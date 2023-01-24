using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using SmartPay.Configuration.Dto;

namespace SmartPay.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : SmartPayAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
