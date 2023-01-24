using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SmartPay.Authorization;

namespace SmartPay
{
    [DependsOn(
        typeof(SmartPayCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class SmartPayApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<SmartPayAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(SmartPayApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
