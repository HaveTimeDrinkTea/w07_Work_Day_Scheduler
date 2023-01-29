$(document).ready(function() {
//-- START of document.ready

//-- Get time to display in jumbotron and schedule header
const timeCurrentPElQ = document.querySelector("#currentDay");

setInterval(function() {
   let now = moment().format("ddd, Do MMM YYYY HH:mm:ss") ;
   timeCurrentPElQ.textContent = now;
}, 1000);

var today = new Date();
console.log(today.toLocaleDateString());

$('#todayDate').text(moment(today).format("Do MMM YYYY"));


//-- Get the array of time slots

var timeSlotArray = ["t07", "t08", "t09", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19"];

userTask = "time to sleep";

$("8")

// for (let i = 0; i < timeSlotArray.length; i++) {
//    eval('var ' + timeSlotArray[i] + '= "' + userTask +'";');
// }

var timeSlotArrayIndex;

var hrNum = 11;

timeSlotArrayIndex = hrNum - 7;

eval('var ' + timeSlotArray[timeSlotArrayIndex] + '= "' + userTask +'";');

console.log("t11 is:", t11);

// function createTimeSlot(hrNum, userTask) {
//    let tPrefix = "t"
//    eval('var ' + tPrefix + hrNum + ' = ' + userTask + ';');
//    console.log("t" + hrNum + ": " + t09);
// }


// createTimeSlot("09", "dog walking");


// var taskListArray = [
//    {
//       date: ,
//       t08: ,
//       t09: ,
//       t10: ,
//       t11: ,
//       t12: ,
//       t13: ,
//       t14: ,
//       t15: ,
//       t16: ,
//       t17: ,
//       t18: ,
//       t19: ,
//    },
// ];



//-- END of document.ready
});   