// var myPrompt = prompt("Passcode");
// console.log(myPrompt);

function onClick() {
  const password = "3890R6478"
  const input = prompt("Passcode")

  if (input === password) {
    alert("");
  } else {
    alert("Password is incorrect.");
  }
}
