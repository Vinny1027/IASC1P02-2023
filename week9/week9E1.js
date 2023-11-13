function startTime(){
  var today = new Date();
  var h = exactDate.getHours();
  var m = exactDate.getMinutes();
  var s = exactDate.getSeconds();
}
exactDate = new Date();
var endTime = exactDate.getTime();
console.log("page load took "+(endTime-startTime)+"ms");

function stopTime() {
  //document.getElementById("output3").innerHTML="Output Three Here";
}


var myalert = alert("You stopped the time at");


// function stopTime() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
// var myAlert = alert("You have been on this page for");


var exactDate = new Date();

console.log(exactDate);
console.log("Pull pieces from exactDate");

var month = exactDate.getMonth() +1;
var year = exactDate.getFullYear();
var day = exactDate.getDay();
var time = exactDate.getTime();

console.log("Month: "+month);
console.log("Year: "+year);
console.log("Day: "+day);
console.log("Time: "+time);
