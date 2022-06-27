// Assignment Code


// generateEl.addEventListener('click', () => {
//   const length = +lengthEl.value;
//   const hasLower = lowercaseEl.Checked;
//   const hasUpper = uppercaseEl.Checked;
//   const hassymbols = symbolsEl.Checked;
//   const hasNumber = numbercaseEl.Checked;
//   generatePassword(haslower, hasNumber, hasUpper, hassymbols, length)

//   console.log(haslower, hasNumber, hasUpper, hassymbols);
// } );


function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
  console.log(getRandomLower ());
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
  console.log(getRandomUpper ());
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
  console.log(getRandomNumber ());
}
function getRandomSymbols () {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
  console.log(getRandomSymbols ());
}



// const resultEL = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEL = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// console.log(getRandomLower ());
// console.log(getRandomUpper ());
// console.log(getRandomNumber ());
// console.log(getRandomSymbol ());

// const randomFunc = {
//   lower: getRandomLower (),
//   upper: getRandomUpper (),
//   symbol: getRandomSymbol (),
//   number: getRandomSymbol (),

// }

// var generateBtn = document.querySelector("#generate");

// function getRandomInt {
// }

// function promptUser() {
//   var passwordLength = prompt('choose password length between 8 and 128');
//   var wantsUppercase = prompt('Uppercase?');
//   var wantsLowercase = confirm('Lowercase?');
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

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

// "if (upper + lower + numeric + spSymbols === 0) {
//   alert('You must have at least one character type selected for your password!')
// }"
