// Assignment code here

var passwordLength = 8;
var characters = ""

function generatePassword() {
  var password = "";
  if (confirm(`You want to modify the types of the characters of the password?`)){
    var includeChar = true
  } else{
    alert("At least 1 character type should be selected. Try again.")
    return null
  } 
  if (confirm(`You want to modify the length of the password?`)){
    var includeLen = true
  } else{
    var includeLen = false
  }
  if (includeChar) {
    chartypesbtn()
  }
  //   return "Try again"
  // }
  if (characters == ""){
    alert("At least 1 character type should be selected. Try again.")
    return null
  } else{
    if (includeLen) {
      lengthbtn()
    }
    for (var i = 0; i < passwordLength; i++){
      var randomNum = Math.floor(Math.random() * characters.length);
      password += characters.substring(randomNum, randomNum+1);
    }
    // alert(password)
    return password
  }
}

function chartypesbtn(){
  characters = ""
  if (confirm(`You want lowercase characters?`)){
    characters = characters + "abcdefghijklmnopqrstuvwxyz"
  } 
  if (confirm(`You want uppercase characters?`)){
    characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } 
  if (confirm(`You want numeric characters?`)){
    characters = characters + "0123456789"
  } 
  if (confirm(`You want special characters?`)){
    characters = characters + "!@#$%^&*()"
  }
}
function lengthbtn(){
  var userLen = prompt("Type length of password");
  var validate = isNaN(userLen)
  if (userLen.length > 0){
    userLen = userLen.replace(/\s/g, '');
  }
  if (validate) {
    alert("invalid value")
  } else if (userLen === null || userLen == undefined || userLen == ""){
    alert("invalid value")
  } else {
    if (userLen % 1 === 0 && 8 <= userLen && userLen <= 128 ) {
      if (confirm(`You want ${userLen} characters?`)){
        passwordLength = userLen
      } else{
        alert("Try again")
      }
    } else{
      alert("Only integer values between 8 and 128 are allowed. Try again.")
    }
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
