// Assignment Code

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}


console.log(getRandomLower ());
console.log(getRandomUpper ());
console.log(getRandomNumber ());

var generateBtn = document.querySelector("#generate");

// function getRandomInt {
// }

function promptUser() {
  var passwordLength = prompt('choose password length between 8 and 128');
  var wantsUppercase = prompt('Uppercase?');
  var wantsLowercase = confirm('Lowercase?');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// make a password



// special characters
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Need prompts, four criteria, radomness

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```