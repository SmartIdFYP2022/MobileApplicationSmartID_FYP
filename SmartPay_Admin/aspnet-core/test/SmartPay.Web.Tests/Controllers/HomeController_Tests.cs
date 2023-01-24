using System.Threading.Tasks;
using SmartPay.Models.TokenAuth;
using SmartPay.Web.Controllers;
using Shouldly;
using Xunit;

namespace SmartPay.Web.Tests.Controllers
{
    public class HomeController_Tests: SmartPayWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}