// Assignment Code
var generateBtn = document.querySelector("#generate");

//I used array to store necessary data
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercasecharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","Z","W","X","Y","Z"];
var numericRange = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["/","[","]","!","@","#","$","%","^","&","*","(",")","_","+",";","'",":",",",".","<",">","?","+","-","~"];

// Used to empty space
var passwordValue = "";

function generatePassword() {
var passwordLengt = prompt("Please choose the length of the password you want to generate. Password must be between 8-128 characters.");
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must contain at least 8 characters and no more than 128 characters!");
  return passwordValue; 
}

}






/* function userOptions() {
var passwordLengt = prompt("Please choose the length of the password you want to generate. Password must be between 8-128 characters.");
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must contain at least 8 characters and no more than 128 characters!");
  // return to question??????????????????
}

if (passwordLength > 8 || passwordLength < 128) {
  console.log (lowercaseCharactersUse)
  // how to make it to rememeber the lenght for password generation???????????????????
}


var lowercaseCharactersUse = prompt("Do you want to include lowercase characters? (Please enter yes or no) ");
if (lowercaseCharactersUse = "no"){
  console.log (uppercaseCharactersUse)
  // how to make it skip this step?????????????????????
  }


if (lowercaseCharactersUse = "yes"){
console.log (uppercaseCharactersUse)
// how to make it to generate and remember????????????????????
}

var uppercaseCharactersUse = prompt("Do you want to include uppercase characters? (Please enter yes or no)");

var specialCharacterChoice = prompt("Do you want to include a special character? (Please enter yes or no)");*/



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
