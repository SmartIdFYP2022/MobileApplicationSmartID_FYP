using System.ComponentModel.DataAnnotations;

namespace SmartPay.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}