// Assignment Code
var generateBtn = document.querySelector("#generate");

//I used array to store necessary data
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Z", "W", "X", "Y", "Z"];
var numericRange = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["/", "[", "]", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ";", "'", ":", ",", ".", "<", ">", "?", "+", "-", "~"];

// ??????
var passwordValue = [];

function generatePassword() {
  //used to generate message in promtbox
  var passwordLength = prompt("Please choose the length of the password you want to generate. Password must be between 8-128 characters.");
  // Error message
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
  // used to generate random character
    passwordValue.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)])
    console.log(passwordValue)
  } else {
    console.log(false);
  }


  var uppercaseCharactersUse = confirm("Do you want to include uppercase characters?");
  // used to log the coice
  if  (uppercaseCharactersUse) {
    console.log(true);
    // used to generate random character
    passwordValue.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)])
    console.log(passwordValue)
  } else {
    console.log(false);
  }
  
  var numericRangeUse = confirm("Do you want to include numbers?");
  // used to log the coice
  if  (numericRangeUse) {
    console.log(true);
    // used to generate random character
    passwordValue.push(numericRange[Math.floor(Math.random() * numericRange.length)])
    console.log(passwordValue)
  } else {
    console.log(false);
  }

  var specialCharactersUse = confirm("Do you want to include special characters?");
  // used to log the coice
  if  (specialCharactersUse) {
    console.log(true);
  // used to generate random character
    passwordValue.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
    console.log(passwordValue)
  } else {
    console.log(false);
  }

//console.log(parseInt(passwordLength))

//console.log(passwordValue.length)

//console.log(typeof (parseInt(passwordLength) - passwordValue.length))

// var allCharacters = [].concat(lowercaseCharacters, uppercaseCharacters, numericRange, specialCharacters);

// console.log(allCharacters)

  for (var i=0; i < ((parseInt(passwordLength) - passwordValue.length)); i++) {
    if (lowercaseCharactersUse === true) {
      passwordValue.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]) 
      console.log(i)
    }
  }

  // for (var i=0; i < ((parseInt(passwordLength) - passwordValue.length)); i++) {
  //   if (uppercaseCharactersUse === true) {
  //     passwordValue.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]) 
  //     console.log(i)
  //   }
  // }

  // for (var i=0; i < ((parseInt(passwordLength) - passwordValue.length)); i++) {
  //   if (numericRangeUse === true) {
  //     passwordValue.push(numericRange[Math.floor(Math.random() * numericRange.length)]) 
  //     console.log(i)
  //   }
  // }

  // for (var i=0; i < ((parseInt(passwordLength) - passwordValue.length)); i++) {
  //   if (specialCharactersUse === true) {
  //     passwordValue.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]) 
  //     console.log(i)
  //   }
  // }
 

console.log(passwordValue)

// change passwordValue from array to string before using return (using info from w3schools JavaScript Array toString() )

  return passwordValue;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
