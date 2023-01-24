using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace SmartPay.EntityFrameworkCore
{
    public static class SmartPayDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<SmartPayDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<SmartPayDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
