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
  var formats = {
    //2 digit prefixes
    38000000000000:"Diner's Club",
    39000000000000:"Diner's Club",
    340000000000000:"American Express",
    370000000000000:"American Express",
    4100000000000:"Visa",
    4100000000000000:"Visa",
    4100000000000000000:"Visa",
    5100000000000000:"MasterCard",
    5200000000000000:"MasterCard",
    5300000000000000:"MasterCard",
    5400000000000000:"MasterCard",
    5500000000000000:"MasterCard",
    6500000000000000:"Discover",
    6500000000000000000:"Discover",

    // 3 digit prefixes
    6440000000000000:"Discover",
    6440000000000000000:"Discover",
    6450000000000000: "Discover",
    6450000000000000000:"Discover",
    6460000000000000:"Discover",
    6460000000000000000:"Discover",
    6470000000000000:"Discover",
    6470000000000000000:"Discover",
    6480000000000000:"Discover",
    6480000000000000000:"Discover",
    6490000000000000:"Discover",
    6490000000000000000:"Discover",

    // 4 digit prefixes
    6011000000000000:"Discover",
    6011000000000000000:"Discover",
    501800000000:"Maestro",
    5018000000000:"Maestro",
    50180000000000:"Maestro",
    501800000000000:"Maestro",
    5018000000000000:"Maestro",
    50180000000000000:"Maestro",
    501800000000000000:"Maestro",
    5018000000000000000:"Maestro",
    502000000000:"Maestro",
    5020000000000:"Maestro",
    50200000000000:"Maestro",
    502000000000000:"Maestro",
    5020000000000000:"Maestro",
    50200000000000000:"Maestro",
    502000000000000000:"Maestro",
    5020000000000000000:"Maestro",
    503800000000:"Maestro",
    5038000000000:"Maestro",
    50380000000000:"Maestro",
    503800000000000:"Maestro",
    5038000000000000:"Maestro",
    50380000000000000:"Maestro",
    503800000000000000:"Maestro",
    5038000000000000000:"Maestro",
    630400000000:"Maestro",
    6304000000000:"Maestro",
    63040000000000:"Maestro",
    630400000000000:"Maestro",
    6304000000000000:"Maestro",
    63040000000000000:"Maestro",
    630400000000000000:"Maestro",
    6304000000000000000:"Maestro"
  }

  // Check 2 digit prefixes
  if(formats[cardNumber.slice(0,2)+'0000000000000000000'.slice(2, cardNumber.length)] !== undefined)
    return formats[cardNumber.slice(0,2)+'0000000000000000000'.slice(2, cardNumber.length)];
  // Check 3 digit prefixes
  if(formats[cardNumber.slice(0,3)+'0000000000000000000'.slice(3, cardNumber.length)] !== undefined)
    return formats[cardNumber.slice(0,3)+'0000000000000000000'.slice(3, cardNumber.length)];
  // Check 4 digit prefixes
  if(formats[cardNumber.slice(0,4)+'0000000000000000000'.slice(4, cardNumber.length)] !== undefined)
    return formats[cardNumber.slice(0,4)+'0000000000000000000'.slice(4, cardNumber.length)];
};


