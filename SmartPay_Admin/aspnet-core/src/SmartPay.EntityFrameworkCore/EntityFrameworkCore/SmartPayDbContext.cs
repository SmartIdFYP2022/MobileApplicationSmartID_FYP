using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SmartPay.Authorization.Roles;
using SmartPay.Authorization.Users;
using SmartPay.MultiTenancy;
using SmartPay.SmartAccounts;
using SmartPay.Transactions;

namespace SmartPay.EntityFrameworkCore
{
    public class SmartPayDbContext : AbpZeroDbContext<Tenant, Role, User, SmartPayDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DbSet<Account> Accounts { get; set; }
       
        public DbSet<Transaction> Transactions { get; set; }
        public SmartPayDbContext(DbContextOptions<SmartPayDbContext> options)
            : base(options)
        {
        }
    }
}
