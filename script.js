// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upper= upperCase.split("");
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var lower = lowerCase.split("");
var numeric = "0123456789";
var number = numeric.split("");
var specialCh = "~!@#$%^&*()-_=+<>/?[{]}";
var special = specialCh.split("");
var criteriaChoices = [];
var criteria = [];


// Write password to the #password input
function writePassword() {
  // Prompt for password length.
  var passLength = (prompt("Please enter the amount of characters your would like, must be between 8 and 128."));
  console.log(passLength);
 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
