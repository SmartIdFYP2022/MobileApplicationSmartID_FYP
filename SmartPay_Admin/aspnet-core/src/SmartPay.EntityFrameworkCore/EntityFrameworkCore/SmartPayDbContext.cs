using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SmartPay.Authorization.Roles;
using SmartPay.Authorization.Users;
using SmartPay.MultiTenancy;

namespace SmartPay.EntityFrameworkCore
{
    public class SmartPayDbContext : AbpZeroDbContext<Tenant, Role, User, SmartPayDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public SmartPayDbContext(DbContextOptions<SmartPayDbContext> options)
            : base(options)
        {
        }
    }
}
