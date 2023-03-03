using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartPay.SmartAccounts.Dto
{
    public class TransferPointDto
    {
        public long SoucrseAccId { get; set; }

        public long DestinationAccId { get; set; }

        public decimal AmountTranfered { get; set; }
    }
}
