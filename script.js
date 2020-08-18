// Assignment Code
var generateBtn = document.querySelector("#generate");
// Variables
var passLength;
var criteriaChoices = [];
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upper= upperCase.split("");
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var lower = lowerCase.split("");
var numeric = "0123456789";
var number = numeric.split("");
var specialCh = "~!@#$%^&*()-_=+<>/?[{]}";
var special = specialCh.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

function generatePassword() {
// Prompt for password length.
  var passLength = (prompt("Please enter the amount of characters you would like, must be between 10 and 128."));
  console.log(passLength);

// Confirmation to add uppercase letters. 
  upperCase = confirm("Do you want to include uppercase? Click OK for yes and Cancel for no.");
  if (upperCase === true) {
    console.log("uppercase");
    criteriaChoices = criteriaChoices.concat(upper);
  }

// Confirmation to add uppercase letters. 
  lowerCase = confirm("Do you want to include lowercase? Click OK for yes and Cancel for no.");
  if (lowerCase === true) {
    console.log("lowercase");
    criteriaChoices = criteriaChoices.concat(lower);
  }

// Confirmation to add numbers. 
  numeric = confirm("Do you want to include numbers? Click OK for yes and Cancel for no.");
  if (numeric === true) {
    console.log("numbers");
    criteriaChoices = criteriaChoices.concat(number);
  }

// Confirmation to add spcecial characters. 
  specialCh = confirm("Do you want to include special characters? Click OK for yes and Cancel for no.");
  if (specialCh === true) {
    console.log("special characters");
    criteriaChoices = criteriaChoices.concat(special);
  }
  
// Alert for when user does not slect at least one character type. 
  if (upperCase === false && lowerCase === false && numeric === false && specialCh === false) {
    alert("WARNING! Your password must contain at least one character type. Please click on 'Generate Password' button again.");
    return "";
  }

// Creating random password based on user selections.
  var password = "";
  for (var i = 1; i <= passLength; i++) {
    var randomChar = criteriaChoices[Math.floor(Math.random() * criteriaChoices.length)];
    password = password + randomChar;
  }
  return password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

