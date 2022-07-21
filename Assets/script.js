// Assignment Code
var generateBtn = document.querySelector("#generate");

//I used array to store necessary data
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Z", "W", "X", "Y", "Z"];
var numericRange = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["/", "[", "]", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ";", "'", ":", ",", ".", "<", ">", "?", "+", "-", "~"];

// Empty arrays to store updated information
var passwordValue = [];
var passwordValueConcat = [];
var guaranteedCharacters= [];


function generatePassword() {
  //used to generate message in promtbox
  var passwordLength = prompt("Please choose the length of the password you want to generate. Password must be between 8-128 characters.");
  // Error message if chosen length is incorrect
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain at least 8 characters and no more than 128 characters!");
    return;
  }
  // used to log the choice
  if (passwordLength > 8 || passwordLength < 128) {
    console.log(passwordLength)
  }


  var lowercaseCharactersUse = confirm("Do you want to include lowercase characters?");
  // used to log the coice
  if  (lowercaseCharactersUse) {
    console.log(true);
  } else {
    console.log(false);
  }


  var uppercaseCharactersUse = confirm("Do you want to include uppercase characters?");
  if  (uppercaseCharactersUse) {
    console.log(true);
  } else {
    console.log(false);
  }
  
  var numericRangeUse = confirm("Do you want to include numbers?");
  if  (numericRangeUse) {
    console.log(true);
  } else {
    console.log(false);
  }

  var specialCharactersUse = confirm("Do you want to include special characters?");
  if  (specialCharactersUse) {
    console.log(true);
  } else {
    console.log(false);
  }



  if (lowercaseCharactersUse === true) {
    // empty array is used to create a new array depending on user password characters choice
    passwordValueConcat = passwordValueConcat.concat(lowercaseCharacters)
      // used to generate random character for the password
    guaranteedCharacters.push(lowercaseCharacters[Math.floor(Math.random()* lowercaseCharacters.length)])
  }

  if (uppercaseCharactersUse === true) {
    passwordValueConcat = passwordValueConcat.concat(uppercaseCharacters)
    guaranteedCharacters.push(uppercaseCharacters[Math.floor(Math.random()* uppercaseCharacters.length)])
  }

  if (numericRangeUse === true) {
    passwordValueConcat = passwordValueConcat.concat(numericRange)
    guaranteedCharacters.push(numericRange[Math.floor(Math.random()* numericRange.length)])
  }

  if (specialCharactersUse === true) {
    passwordValueConcat = passwordValueConcat.concat(specialCharacters)
    guaranteedCharacters.push(specialCharacters[Math.floor(Math.random()* specialCharacters.length)])
  }

  console.log(guaranteedCharacters)
 
  console.log(passwordValueConcat)

  // used to generate number of characters that equals to chosen password length 
  for (var i=0; i < passwordLength; i++) {
      passwordValue.push(passwordValueConcat[Math.floor(Math.random() * passwordValueConcat.length)]) 
      console.log(passwordValue[i])
  }

  // used to include already generated characters
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    passwordValue[i] = guaranteedCharacters[i];
  }

  console.log(passwordValue)


// logs in password value on a web page and removes comas between characters

  return passwordValue.join("");
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
