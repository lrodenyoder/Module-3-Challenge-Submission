// Assignment code here

//random variables
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
//var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = "!@#$%^&*_-+=";
var passwordCharacters = [];


//generatePassword FUNCTION BEGIN
function generatePassword() {
  //BEGIN LOWERCASE CHOICE FUNCTION
  var includeLowerCase = function () {
    var lowercaseOpt = window.prompt(
      "Would you like to include lowercase characters in the password? Enter YES or NO"
    );

    if (lowercaseOpt === "" || lowercaseOpt === null) {
      window.alert("Please enter a valid answer. Try again.");

      return includeLowerCase();
    }

    lowercaseOpt = lowercaseOpt.toLowerCase();

    if (lowercaseOpt === "yes") {
      window.alert("You have chosen to INCLUDE lowercase characters.");

      return true;
    } else if (lowercaseOpt === "no") {
      window.alert("You have chosen NOT to include lowercase characters.");

      return false;
    } else {
      window.alert("Please enter a valid answer. Try again.");

      return includeLowerCase();
    }
  };
  //END LOWERCASE CHOICE FUNCTION

  //BEGIN UPPERCASE CHOICE FUNCTION
  var includeUpperCase = function () {
    var uppercaseOpt = window.prompt(
      "Would you like to include uppercase characters in the password? Enter YES or NO"
    );

    if (uppercaseOpt === "" || uppercaseOpt === null) {
      window.alert("Please enter a valid answer. Try again.");

      return includeUpperCase();
    }

    uppercaseOpt = uppercaseOpt.toLowerCase();

    if (uppercaseOpt === "yes") {
      window.alert("You have chosen to INCLUDE uppercase characters.");

      return true;
    } else if (uppercaseOpt === "no") {
      window.alert("You have chosen NOT to include uppercase characters.");

      return false;
    } else {
      window.alert("Please enter a valid answer. Try again.");

      return includeUpperCase();
    }
  };
  //END UPPERCASE CHOICE FUNCTION

  //BEGIN NUMERIC CHOICE FUNCTION
  var includeNumber = function () {
    var numberOpt = window.prompt(
      "Would you like to include numeric characters in the password? Enter YES or NO"
    );

    if (numberOpt === "" || numberOpt === null) {
      window.alert("Please enter a valid answer. Try again.");

      return includeNumber();
    }

    numberOpt = numberOpt.toLowerCase();

    if (numberOpt === "yes") {
      window.alert("You have chosen to INCLUDE numeric characters.");

      return true;
    } else if (numberOpt === "no") {
      window.alert("You have chosen NOT to include numeric characters.");

      return false;
    } else {
      window.alert("Please enter a valid answer. Try again.");

      return includeNumber();
    }
  };
  //END NUMERIC CHOICE FUNCTION

  //BEGIN SPECIAL CHOICE FUNCTION
  var includeSpecial = function () {
    var specialOpt = window.prompt(
      "Would you like to include special characters in the password? Enter YES or NO"
    );

    if (specialOpt === "" || specialOpt === null) {
      window.alert("Please enter a valid answer. Try again.");

      return includeSpecial();
    }

    specialOpt = specialOpt.toLowerCase();

    if (specialOpt === "yes") {
      window.alert("You have chosen to INCLUDE special characters.");

      return true;
    } else if (specialOpt === "no") {
      window.alert("You have chosen NOT to include special characters.");

      return false;
    } else {
      window.alert("Please enter a valid answer. Try again.");

      return includeSpecial();
    }
  };
  //END SPECIAL CHOICE FUNCTION

  //BEGIN USER INPUT OPTIONS
  //IF USER INCLUDES LOWER CASE
  if (includeLowerCase() === true) {
    //code to include random lowercase characters
    passwordCharacters.push(alphaLower);
  }
  //IF USER INCLUDES LOWER CASE END

  //IF USER INCLUDES LOWER CASE
  if (includeUpperCase() === true) {
    //code to include random lowercase characters
    passwordCharacters.push(alphaUpper);
  }
  //IF USER INCLUDES LOWER CASE END

  //IF USER INCLUDES LOWER CASE
  if (includeNumber() === true) {
    //code to include random lowercase characters
    passwordCharacters.push(numbers);
  }
  //IF USER INCLUDES LOWER CASE END

  //IF USER INCLUDES LOWER CASE
  if (includeSpecial() === true) {
    //code to include random lowercase characters
    passwordCharacters.push(specials);
  }
  //IF USER INCLUDES LOWER CASE END
    //END USER INPUT OPTIONS

  ///CHANGE HERE: USE CALLBACK FUNCTIONS TO EXECUTE OPTION FUNCTIONS
  //USER INPUT IF STATEMENTS BEGIN
  // if (
  //   !includeLowerCase() &&
  //   !includeUpperCase() &&
  //   !includeNumber() &&
  //   !includeSpecial()
  // ) {
  //   window.alert("You must choose at least one criteria! Try again.");

  //   return generatePassword();
  // } else if (
  //   includeLowerCase() &&
  //   includeUpperCase() &&
  //   includeNumber() &&
  //   includeSpecial()
  // ) {
  //   choices = specials.concat(numbers, alphaLower, alphaUpper);
  // }
  // // Else if for 3 positive options
  // else if (includeUpperCase() && includeNumber() && includeSpecial()) {
  //   choices = specials.concat(numbers, alphaUpper);
  // } else if (includeSpecial() && includeNumber() && includeLowerCase()) {
  //   choices = specials.concat(numbers, alphaLower);
  // } else if (includeSpecial() && includeLowerCase() && includeUpperCase()) {
  //   includeLowerCase();
  //   choices = specials.concat(alphaLower, alphaUpper);
  // } else if (includeNumber() && includeLowerCase() && includeUpperCase()) {
  //   choices = numbers.concat(alphaLower, alphaUpper);
  // }
  // // Else if for 2 positive options
  // else if (includeSpecial() && includeNumber()) {
  //   choices = specials.concat(numbers);
  // } else if (includeSpecial() && includeLowerCase()) {
  //   choices = specials.concat(alphaLower);
  // } else if (includeSpecial() && includeUpperCase()) {
  //   choices = specials.concat(alphaUpper);
  // } else if (includeLowerCase() && includeNumber()) {
  //   choices = alphaLower.concat(numbers);
  // } else if (includeLowerCase() && includeUpperCase()) {
  //   choices = alphaLower.concat(alphaUpper);
  // } else if (includeNumber() && includeUpperCase()) {
  //   choices = numbers.concat(alphaUpper);
  // }
  // // Else if for 1 positive option
  // else if (includeSpecial()) {
  //   choices = specials;
  // } else if (includeNumber()) {
  //   choices = numbers;
  // } else if (includeLowerCase()) {
  //   choices = alphaLower;
  // } else if (includeUpperCase()) {
  //   choices = alphaUpper;
  // }
  //USER INPUT IF STATEMENTS END
  //END CHANGE CALLBACKS HERE

  //   console.log(getRandomLower());
  //   console.log(getRandomUpper());
  //   console.log(getRandomNumbers());
  //   console.log(getRandomSpecials());

  var chosenLength = chooseLength();
  //   console.log(chosenLength);

  var password = [];

  // Start random selection variables:
  // Random selection for all variables:

  for (var i = 0; i < chosenLength; i++) {
    var pickChoices =
      passwordCharacters.join("")[
        Math.floor(Math.random() * passwordCharacters.join("").length)
      ];
    password.push(pickChoices);
  }

  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var finalPassword = password.join("");
  return finalPassword;
}
//generatePassword FUNCTION END


//RANDOM GENERATION FUNCTIONS BEGIN
//random lowercase
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
//RANDOM GENERATION FUNCTIONS END



//chooseLength FUNCTION BEGIN
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
  } else if (8 <= passLength && passLength <= 128) {
    window.alert("Your password will be " + passLength + " characters long.");

    return passLength;
  }
}
//chooseLength FUNCTION END




//DON'T CHANGE BELOW THIS LINE
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
