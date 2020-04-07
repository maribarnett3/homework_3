// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  options = {}
  getPasswordOptions()
  if (options) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

}

var options = {}
var characterTypes;
// function getPasswordOptions() {
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("how many character would you like your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")
    options = null;
    return
  }
  options.passwordLength = passwordLength
  options.characterTypes = prompt("Character types desired comma separated: lowercase,uppercase,numeric,special").split(",");
  supportedTypes = "lowercase,uppercase,numeric,special".split(",");
  if (options.characterTypes[0])
    options.characterTypes.forEach(type => {
      if (supportedTypes.indexOf(type) == -1) {
        alert(type + " is not a valid password character choice")
        options = null;
        return;
      }
    });

}

function generatePassword() {
  var length = options.passwordLength,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (options.characterTypes.indexOf("numeric") != -1) {
    charset = "0123456789"
  }
  if (options.characterTypes.indexOf("special") != -1) {
    charset += "$%^*@~"
  }

  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }


  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// getPasswordOptions ();
//