function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "3890R6478") {
    return true;
   }
   alert("Password Denied.");
   return false;
   }

//https://getcodingkids.com/code-skill/create-a-password/
// function checkPassword() {
//   var password = document.getElementById("passwordBox");
//   var passwordText = password.value;
//   if(passwordText == "3890R6478") {
//    return true;
//   }
//   alert("Password Denied.");
//   return false;
//   }
