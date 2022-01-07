// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //BEGIN PASSWORD LENGTH CODE
  var passLength = window.prompt("Select length of password between 8 - 128 characters.");

  if (isNaN(passLength) || passLength === "" || passLength === null) {
    window.alert("Please enter a valid number between 8 - 128.");

    return writePassword();
  }

  passLength = parseInt(passLength);

  if (passLength < 8 || 128 < passLength) {
    window.alert("Please try again. Select length of password between 8-128 characters.");

    return writePassword();
  }
  //END PASSWORD LENGTH Code

  

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
