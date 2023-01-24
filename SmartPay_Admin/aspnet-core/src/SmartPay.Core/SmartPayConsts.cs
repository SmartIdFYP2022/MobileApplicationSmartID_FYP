using SmartPay.Debugging;

namespace SmartPay
{
    public class SmartPayConsts
    {
        public const string LocalizationSourceName = "SmartPay";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "b4c18a4cc67b4a38a3dff82fc10fdcc0";
    }
}
