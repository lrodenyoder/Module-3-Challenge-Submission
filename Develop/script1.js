// Assignment code here

// const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
// const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbers = "0123456789";
// const specials = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
const specials = "!@#$%^&*_-+=";
var choices;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //BEGIN PASSWORD LENGTH FUNCTION
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
  //END PASSWORD LENGTH FUNCTION

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

  var passwordCharacters = "";
   
  if (includeLowerCase()) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }

  if (includeUpperCase()) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }

  if (includeNumber()) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (includeSpecial()) {
    passwordCharacters = passwordCharacters.concat(specials);
  }

  debugger;

  var chosenLength = chooseLength();

  for (var i = 0; i < chosenLength; i++) {
    pickChoices += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  return pickChoices;



};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


