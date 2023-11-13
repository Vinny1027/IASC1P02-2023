var age = 23435056692; //in Millis
var dateOfBirth = new Date(new Date().getTime() - age);

var exactDate = new Date();
var number1= exactDate.getFullYear();
var number2= prompt();
var number3= number1 - number2;

var myPrompt = prompt("What is your age?");
console.log(myPrompt);

function confirm()
{
  //document.getElementById("dateOfBirth").innerHTML=("Your year of birth is: 2023 - ");
document.write(number3);
}

console.log(exactDate);


var month = exactDate.getMonth() +1;
var year = exactDate.getFullYear();
var day = exactDate.getDay();
var time = exactDate.getTime();

console.log("Month: "+month);
console.log("Year: "+year);
console.log("Day: "+day);
console.log("Time: "+time);
