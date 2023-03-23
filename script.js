// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInput = document.querySelector("#password-input")


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+="
  for (var i =0; i < 8; i++) {
    password += possible.charAt (Math.floor(Math.random() * possible.length))
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

