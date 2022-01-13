// Assignment code here

// generate basic pass element
// Recall that the following variances are arrays of designated elements split by double quotation
// ex. ["a","b","c", .....]
var lowerCase="abcdefghjklmnopqrstuvwxyz".split("");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var number="1234567890".split("");
var specialChar="!\"#$%&\'()*+,-./:;<=>?@\\]^_`{|}~".split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate the password
function generatePassword(){
  
  // define an passwordConfig object inside the generatePassword function, 
  // with the length, upperCase, lowerCase and specialChar sub-elements
  var passwordConfig={
    "length":0,
    "upperCase":null,
    "lowerCase":null,
    "number":null,
    "specialChar":null
  };

  // The password length is required to be between 8 to 128 characters
  // This while loop will not end until the user input the valid password length
  while (!(passwordConfig.length>=8 && passwordConfig.length<=128)){
    passwordConfig.length=window.prompt("What is the password length?")

    // If the user input the in-valid password length, the alert will pop up.
    if (!(passwordConfig.length>=8 && passwordConfig.length<=128)) {
      window.alert("The password length should between 8 to 128 characters. Please re-enter the required password length")
    }
  }
  
  while (
    passwordConfig.upperCase==null
    ||passwordConfig.lowerCase==null
    ||passwordConfig.number==null
    ||passwordConfig.specialChar==null)

    {// Ask the user if he would like to add upperCase letter to the password
    passwordConfig.upperCase=window.confirm("Would you need to add uppercase letter to the password?")
    if (passwordConfig.upperCase==true){
      
    }

    passwordConfig.lowerCase=window.confirm("Would you need to add lowercase letter to the password?")

    passwordConfig.number=window.confirm("Would you need to add number to the password?")

    passwordConfig.specialChar=window.confirm("Would you need to add special characters (ex. #,!, etc.) to the password?")

  }
   
  return passwordConfig.length;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);