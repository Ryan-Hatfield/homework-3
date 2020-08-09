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

//Prompt to add uppercase letters. 
  upperCase = confirm("Do you want to include uppercase? Click OK for yes and Cancel for no.");
  if (upperCase === true) {
    criteria = criteria.concat("uppercase");
    console.log("uppercase");
    criteriaChoices = criteriaChoices.concat(upper);
  }

//Prompt to add uppercase letters. 
  lowerCase = confirm("Do you want to include lowercase? Click OK for yes and Cancel for no.");
  if (lowerCase === true) {
    criteria = criteria.concat("lowercase");
    console.log("lowercase");
    criteriaChoices = criteriaChoices.concat(lower);
  }

//Prompt to add numbers. 
  numeric = confirm("Do you want to include numbers? Click OK for yes and Cancel for no.");
  if (numeric === true) {
    criteria = criteria.concat("numbers");
    console.log("numbers");
    criteriaChoices = criteriaChoices.concat(number);
  }

//Prompt to add spcecial characters. 
  specialCh = confirm("Do you want to include special characters? Click OK for yes and Cancel for no.");
  if (specialCh === true) {
    criteria = criteria.concat("special characters");
    console.log("special characters");
    criteriaChoices = criteriaChoices.concat(special);
  }
  
// Alert for when user does not slect at least one character type. 
  if (upperCase === false || lowerCase === false || numeric === false || specialCh === false) {
    alert("WARNING! Your password must contain at least one character type. Please click on 'Generate Password' button again.");
    return "";
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
