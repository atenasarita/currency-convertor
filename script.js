const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SOS", "SRD", "SSP",
    "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD",
    "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND",
    "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];

const apiKey = "https://v6.exchangerate-api.com/v6/bdef10d1454d593a90aab230/latest/USD";

const fromCurrency = document.querySelector(".from-currency");
const toCurrency = document.querySelector(".to-currency");
const convertBtn = document.querySelector(".convert-btn");

// add the options for the supported currencies
currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;

    fromCurrency.add(option);
});

currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;

    toCurrency.add(option);
});

// change the "from" amount
function changeFromCurrency(){
    const fromValue = fromCurrency.value;

    document.querySelector("#from-currency-amount").innerHTML = fromValue;
}

fromCurrency.addEventListener("change", changeFromCurrency);


// convert 
async function convertAmount(){
    const amount = document.querySelector("#amount").value;
    const toValue = toCurrency.value;
    const fromValue = fromCurrency.value;
 
    const response = await fetch(apiKey);
    var data = await response.json();

    const fromConversion = data.conversion_rates[fromValue];
    const toConversion = data.conversion_rates[toValue];

    const convertedAmount = ((amount / fromConversion) * toConversion).toFixed(2);
    document.querySelector("#result").innerHTML = amount + " " + fromValue + " = " + convertedAmount + " " + toValue;
}

convertBtn.addEventListener("click", ()=>{
    convertAmount();
});
