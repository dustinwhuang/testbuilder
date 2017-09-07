// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // compare 2 digit prefixes
  var prefix;
  var len = cardNumber.length;

  // 6 digit prefixes
  prefix = cardNumber.slice(0, 6);
  if (622126 <= prefix && prefix <= 622925 && 16 <= len && len <= 19)
    return "China UnionPay";
  if (564182 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (633110 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";

  // 4 digit prefixes
  prefix = cardNumber.slice(0, 4);
  if (6011 == prefix && (len === 16 || len === 19))
    return "Discover";
  if (5018 == prefix && 12 <= len && len <= 19)
    return "Maestro";
  if (5020 == prefix && 12 <= len && len <= 19)
    return "Maestro";
  if (5038 == prefix && 12 <= len && len <= 19)
    return "Maestro";
  if (6304 == prefix && 12 <= len && len <= 19)
    return "Maestro";
  if (6282 <= prefix && prefix <= 6288 && 16 <= len && len <= 19)
    return "China UnionPay";
  if (4903 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (4905 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (4911 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (4936 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (6333 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";
  if (6759 == prefix && (len === 16 || len === 18 || len === 19))
    return "Switch";

  // 3 digit prefixes
  prefix = cardNumber.slice(0, 3);
  if (644 <= prefix && prefix <= 649 && (len === 16 || len === 19))
    return "Discover";
  if (624 <= prefix && prefix <= 626 && 16 <= len && len <= 19)
    return "China UnionPay";

  // 2 digit prefixes
  prefix = cardNumber.slice(0, 2);
  if (38 == prefix && len === 14)
    return "Diner's Club";
  if (39 == prefix && len === 14)
    return "Diner's Club";
  if (34 == prefix && len === 15)
    return "American Express";
  if (37 == prefix && len === 15)
    return "American Express";
  if (51 <= prefix && prefix <= 55 && len === 16)
    return "MasterCard";
  if (65 == prefix && (len === 16 || len === 19))
    return "Discover";

  // 1 digit prefixes
  prefix = cardNumber.slice(0,1);
  if (4 == prefix && (len === 13 || len === 16 || len === 19))
    return "Visa";
};


