using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SmartPay.EntityFrameworkCore;
using SmartPay.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace SmartPay.Web.Tests
{
    [DependsOn(
        typeof(SmartPayWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class SmartPayWebTestModule : AbpModule
    {
        public SmartPayWebTestModule(SmartPayEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(SmartPayWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(SmartPayWebMvcModule).Assembly);
        }
    }
}