using Abp.Authorization;
using SmartPay.Authorization.Roles;
using SmartPay.Authorization.Users;

namespace SmartPay.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
