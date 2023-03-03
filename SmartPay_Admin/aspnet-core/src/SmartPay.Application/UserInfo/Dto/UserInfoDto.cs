using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SmartPay.UserInformation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.UserInfo.Dto
{
    [AutoMapFrom(typeof(UserInformation.UserInfo))]

    public class UserInfoDto: AuditedEntityDto<long>
    {
        public long? UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FatherName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string BloodGroup { get; set; }
        public string Religion { get; set; }
        public string Telephone { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string CNIC { get; set; }
        public string FatherCNIC { get; set; }
        public string FatherOccupation { get; set; }
        public string DepartmentId { get; set; }
        public bool IsStaffMember { get; set; }
        public string EmployeeType { get; set; }
        public string EmployeeStatus { get; set; }
        public string ProfileImage { get; set; }
        public string RegistrationNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public decimal Amount { get; set; }

    }
}
