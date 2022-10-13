//  Character variables declared here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", ";"];
var chosenCharacters = [];

//function to generate password
function generatePassword() {
  var result = [];
  var length = prompt("Please enter the desired number of characters you would like your password to contain.");
  if (isNaN(length)) {
    alert("Please enter a number.");
    return generatePassword();
  }

// declaring a standard of length
if(length < 8 || length > 128) {
  alert("Your password must be between 8 and 128 characters long. Please choose again");
  return generatePassword();
}

// Declaring user's preferences
var hasUppercase = confirm("Does the desired password include an uppercase letter?");
var hasLowercase = confirm("Does the desired password include a lowercase letter?");
var hasNumbers = confirm("Does the desired password include a number?");
var hasSpecial = confirm("Does the desired password include a special character");


if (hasUppercase === false  &&  hasLowercase === false  &&  hasNumbers === false  &&  hasSpecial === false ) {
  alert("Your password must contain atleast 1 character type. Please try again.");
  return generatePassword();
}

if (hasUppercase === true) {
  chosenCharacters += uppercase;
}

if (hasLowercase === true){
  chosenCharacters += lowercase;
}

if (hasNumbers === true) {
  chosenCharacters += numbers;
}

if (hasSpecial === true) {
  chosenCharacters += special;
}

//generating random password
for (var i = 0 ; i < length; i++ ) {
  var index = (Math.floor(Math.random() * chosenCharacters.length));
  var char = chosenCharacters[index];
  result.push(char)
}

return result.join('');

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
