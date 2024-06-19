

// app.js
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};

// Convert from Dollar to Yen
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}

// Convert from Euro to Dollar
function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

// Convert from Yen to Pound
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound;
}

// Export the functions to be used in tests
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

