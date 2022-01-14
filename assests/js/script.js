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
    "upperCase":false,
    "lowerCase":false,
    "number":false,
    "specialChar":false
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
  
  // initialize the passwordElements array, by which the final generated password 
  // will randomly pick the element from the passwordElements
  var passwordElements=[];

  while (
    passwordConfig.upperCase==false
    &&passwordConfig.lowerCase==false
    &&passwordConfig.number==false
    &&passwordConfig.specialChar==false)

    {// Ask the user if he would like to add upperCase letter to the password
    passwordConfig.upperCase=window.confirm("Would you need to add uppercase letter to the password?")
    if (passwordConfig.upperCase==true){
      passwordElements=passwordElements.concat(upperCase);
    }

    // Ask the user if he would like to add lowercase letter to the password
    passwordConfig.lowerCase=window.confirm("Would you need to add lowercase letter to the password?")
    if (passwordConfig.lowerCase==true){
      passwordElements=passwordElements.concat(lowerCase);
    }

    passwordConfig.number=window.confirm("Would you need to add number to the password?")
    if (passwordConfig.number==true){
      passwordElements=passwordElements.concat(number);
    }

    passwordConfig.specialChar=window.confirm("Would you need to add special characters (ex. #,!, etc.) to the password?")
    if (passwordConfig.specialChar==true){
      passwordElements=passwordElements.concat(specialChar);
    }

    if (
      passwordConfig.upperCase==false
      &&passwordConfig.lowerCase==false
      &&passwordConfig.number==false
      &&passwordConfig.specialChar==false){
        window.alert("you must at least pick one types of element for the random password")
      }
  }

  console.log("the password drafting pool is "+passwordElements)
  
  var passwordTopresent=""
  // generate the password with the loop
  for (var i=0; i<passwordConfig.length; i++){
    passwordTopresent=passwordTopresent.concat(passwordElements[Math.floor(Math.random()*passwordElements.length)])
  }

  // verify if the password meet the requirement of having all designated components
  
  // -1- verify on the uppercase letter
  if (passwordConfig.upperCase==true){
    var uppercaseVerify=false;
    // use a double-nested loop to find out 
    // if the generated password has the uppercase letter
    loop1: for (var i=0;i<passwordTopresent.length;i++){
      loop2: for (var j=0;j<upperCase.length;j++){

        if (passwordTopresent[i]===upperCase[j]){
          uppercaseVerify=true
          break loop1;
        };
      };
    };

    // if the generated password does not have uppercase letter 
    // when passwordConfig.upperCase is true, we will re-generate the password
    if (uppercaseVerify===false){
      generatePassword();
    }
  }
  
  // -2- verify on the lowercase letter
  if (passwordConfig.lowerCase==true){
    var lowercaseVerify=false;
    // use a double-nested loop to find out 
    // if the generated password has the lowercase letter
    loop1: for (var i=0;i<passwordTopresent.length;i++){
      loop2: for (var j=0;j<lowerCase.length;j++){

        if (passwordTopresent[i]===lowerCase[j]){
          lowercaseVerify=true
          break loop1;
        };
      };
    };
    // if the generated password does not have lowercase letter 
    // when passwordConfig.lowerCase is true, we will re-generate the password
    if (lowercaseVerify===false){
      generatePassword();
    }
  }

  // -2- verify on the number
  if (passwordConfig.number==true){
    var numberVerify=false;
    // use a double-nested loop to find out 
    // if the generated password has the number
    loop1: for (var i=0;i<passwordTopresent.length;i++){
      loop2: for (var j=0;j<number.length;j++){

        if (passwordTopresent[i]===number[j]){
          numberVerify=true
          break loop1;
        };
      };
    };
    // if the generated password does not have number 
    // when passwordConfig.number is true, we will re-generate the password
    if (numberVerify===false){
      generatePassword();
    }
  }

  // -4- verify on the special characters
  if (passwordConfig.specialChar==true){
    var specialCharVerify=false;
    // use a double-nested loop to find out 
    // if the generated password has the special characters
    loop1: for (var i=0;i<passwordTopresent.length;i++){
      loop2: for (var j=0;j<specialChar.length;j++){

        if (passwordTopresent[i]===specialChar[j]){
          specialCharVerify=true
          break loop1;
        }
      };
    };
    // if the generated password does not have specail characters
    // when passwordConfig.specialChar is true, we will re-generate the password
    if (specialCharVerify===false){
      generatePassword();
    }
  }
   
  return passwordTopresent;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);