const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = "!@#$%^&*_-+=";



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// random lowercase
function getRandomLower() {
  return alphaLower[Math.floor(Math.random() * alphaLower.length)];
}

// random uppercase
function getRandomUpper() {
  
  return alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
}

// random numbers
function getRandomNumbers() {
  
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// random specials
function getRandomSpecials() {
  
  return specials[Math.floor(Math.random() * specials.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumbers());
console.log(getRandomSpecials());

var chooseLength = function () {
  var passLength = window.prompt(
    "Select length of password between 8 - 128 characters."
  );

  if (isNaN(passLength) || passLength === "" || passLength === null) {
    window.alert("Please enter a valid number between 8 - 128.");

    return chooseLength();
  }

  passLength = parseInt(passLength);

  if (passLength < 8 || 128 < passLength) {
    window.alert(
      "Your entry was either to short or too long. Please try again"
    );

    return chooseLength();
  } else if (8 < passLength && passLength < 128) {
    window.alert("Your password will be " + passLength + " characters long.");

    return passLength;
  }
};

var generatePassword = function () {
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumbers,
    symbol: getRandomSpecials,
  };

  var passwordCharacters = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  //   if (includeLowerCase()) {
  //     passwordCharacters = passwordCharacters.concat(alphaLower);
  //   }

  //   if (includeUpperCase()) {
  //     passwordCharacters = passwordCharacters.concat(alphaUpper);
  //   }

  //   if (includeNumber()) {
  //     passwordCharacters = passwordCharacters.concat(numbers);
  //   }

  //   if (includeSpecial()) {
  //     passwordCharacters = passwordCharacters.concat(specials);
  //   }

  if (
    !includeLowerCase() &&
    !includeUpperCase() &&
    !includeNumber() &&
    !includeSpecial()
  ) {
    window.alert("You must choose at least one criteria! Try again.");

    return generatePassword();
  } else if (
    includeLowerCase() &&
    includeUpperCase() &&
    includeNumber() &&
    includeSpecial()
  ) {
    choices = specials.concat(numbers, alphaLower, alphaUpper);
  }
  // Else if for 3 positive options
  else if (includeUpperCase() && includeNumber() && includeSpecial()) {
    choices = specials.concat(numbers, alphaUpper);
  } else if (includeSpecial() && includeNumber() && includeLowerCase()) {
    choices = specials.concat(numbers, alphaLower);
  } else if (includeSpecial() && includeLowerCase() && includeUpperCase()) {
    includeLowerCase();
    choices = specials.concat(alphaLower, alphaUpper);
  } else if (includeNumber() && includeLowerCase() && includeUpperCase()) {
    choices = numbers.concat(alphaLower, alphaUpper);
  }
  // Else if for 2 positive options
  else if (includeSpecial() && includeNumber()) {
    choices = specials.concat(numbers);
  } else if (includeSpecial() && includeLowerCase()) {
    choices = specials.concat(alphaLower);
  } else if (includeSpecial() && includeUpperCase()) {
    choices = specials.concat(alphaUpper);
  } else if (includeLowerCase() && includeNumber()) {
    choices = alphaLower.concat(numbers);
  } else if (includeLowerCase() && includeUpperCase()) {
    choices = alphaLower.concat(alphaUpper);
  } else if (includeNumber() && includeUpperCase()) {
    choices = numbers.concat(alphaUpper);
  }
  // Else if for 1 positive option
  else if (includeSpecial()) {
    choices = specials;
  } else if (includeNumber()) {
    choices = numbers;
  } else if (includeLowerCase()) {
    choices = alphaLower;
  }
  else if (includeUpperCase()) {
    choices = alphaUpper;
  }

  debugger;

  var chosenLength = chooseLength();

  for (var i = 0; i < chosenLength; i++) {
    pickChoices += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }

  return pickChoices;
};;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);