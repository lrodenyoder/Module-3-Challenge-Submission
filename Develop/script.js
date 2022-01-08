// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


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
  var lowercaseOpt = window.prompt("Would you like to include lowercase characters in the password? Enter YES or NO");

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



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  chooseLength();

  includeLowerCase();


  // passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
