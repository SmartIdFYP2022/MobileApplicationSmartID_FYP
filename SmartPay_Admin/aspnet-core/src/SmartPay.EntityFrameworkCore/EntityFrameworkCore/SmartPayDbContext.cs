using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SmartPay.Authorization.Roles;
using SmartPay.Authorization.Users;
using SmartPay.MultiTenancy;
using SmartPay.SmartAccounts;
using SmartPay.Departments;
using SmartPay.UserInformation;
using SmartPay.Vouchers;
using SmartPay.Transactions;
using SmartPay.Items;
using SmartPay.FaceRecognition;

namespace SmartPay.EntityFrameworkCore
{
    public class SmartPayDbContext : AbpZeroDbContext<Tenant, Role, User, SmartPayDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<InvoiceLines> InvoicesLines { get; set; } 
        public DbSet<Item> Items { get; set; }
        public DbSet<Identification> Identities { get; set; }
       
        public DbSet<Transaction> Transactions { get; set; }
        public SmartPayDbContext(DbContextOptions<SmartPayDbContext> options)
            : base(options)
        {
        }
    }
}
