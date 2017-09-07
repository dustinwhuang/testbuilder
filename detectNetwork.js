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
  switch(cardNumber.slice(0,2)+'0000000000000000'.slice(2, cardNumber.length)) {
    case '38000000000000':
      return "Diner's Club";
    case '39000000000000':
      return "Diner's Club";
    case '340000000000000':
      return "American Express";
    case '370000000000000':
      return "American Express";
    case '4100000000000':
      return "Visa";
    case '4100000000000000':
      return "Visa";
    case '4100000000000000000':
      return "Visa";
    case '5100000000000000':
      return "MasterCard";
    case '5200000000000000':
      return "MasterCard";
    case '5300000000000000':
      return "MasterCard";
    case '5400000000000000':
      return "MasterCard";
    case '5500000000000000':
      return "MasterCard";
  }
};


