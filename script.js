// Assignment Code
var generateBtn = document.querySelector("#generate");
var getLength;
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upper = getUpper.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lower = getLower.split("");
var numeric = "0123456789";
var number = getNumber.split("");
var specialCh= "~!@#$%^&*()-_=+[{]}?";
var special = getSymbol.split("");
var getChoices = [];
var charParameters = [];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
