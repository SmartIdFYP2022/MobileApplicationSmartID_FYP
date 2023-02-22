using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.Departments
{
    public class Department : AuditedEntity<long>
    {
        public Departments DepartmentName { get; set; }
    }
    public enum Departments
    {
        ComputerScience = 1,
        InformationTechnology = 2,
        SoftwareEngineer = 3,
        ArtificialIntelligence = 4,
        Gaming = 5
    }
}
