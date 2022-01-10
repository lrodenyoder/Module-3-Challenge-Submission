// Assignment code here

//variables
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specials = "!@#$%^&*_-+=";
var reset = function () {
  passwordCharacters = [];
};
var passwordCharacters = [];


//generatePassword FUNCTION BEGIN
function generatePassword() {
  //reset/empty passwordCharacters array to not have to refresh page to update character options choice
  reset(passwordCharacters);

  //BEGIN USER INPUT OPTIONS
  //IF USER INCLUDES LOWER CASE
  if (includeLowerCase() === true) {
    //push alphaLower string into passwordCharacters array
    passwordCharacters.push(alphaLower);
  }

  //IF USER INCLUDES UPPER CASE
  if (includeUpperCase() === true) {
    passwordCharacters.push(alphaUpper);
  }

  //IF USER INCLUDES NUMBERS
  if (includeNumber() === true) {
    passwordCharacters.push(numbers);
  }

  //IF USER INCLUDES SPECIALS
  if (includeSpecial() === true) {
    passwordCharacters.push(specials);
  }
  //END USER INPUT OPTIONS

  //variable to run chooseLength() to get length of password
  var chosenLength = chooseLength();

  //empty array to hold final password
  var password = [];

  //for loop to cycle through passwordCharacter string until length of password is reached
  for (var i = 0; i < chosenLength; i++) {
    var pickChoices =
      //.join("") changes passwordCharacters into one string
      passwordCharacters.join("")[
        Math.floor(Math.random() * passwordCharacters.join("").length)
      ];
    //push each random character selection to the password array
    password.push(pickChoices);
  }

  //IF USER DOES NOT CHOOSE AT LEAST ONE OPTION
  if (pickChoices === undefined) {
    window.alert("Please choose at least one character type to include.");
    return generatePassword();
  }

  // This joins the password array and converts it to a string
  var finalPassword = password.join("");
  return finalPassword;
}
//generatePassword FUNCTION END


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
