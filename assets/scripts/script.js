$(document).ready(function() {
//-- START of document.ready

//-- Get time to display in jumbotron and schedule header

var thisMoment = new Date();

setInterval(function() {
   let now = moment(thisMoment).format("ddd, Do MMM YYYY HH:mm:ss") ;
   $("#currentDay").text(now);
}, 1000);

var today = new Date();
console.log(today.toLocaleDateString());

$('#todayDate').text(moment(today).format("Do MMM YYYY"));


//-- Get the array of time slots

let currentHour = parseInt(thisMoment.getHours());
console.log("currentHourTest:", currentHour);

// color each hourly slot according to time of day
$("#daySchedule > tr").each(function() {

   let slotHourString = $(this).children().attr("id").substring(0,2);
   let slotHour = parseInt(slotHourString);
   // console.log("slot ID", $(this).children().attr("id"));
   // console.log("slotHour number:", slotHour);

   if ((currentHour > slotHour)) {
      $(this).toggleClass("past");
      $(this).children("td").children("textarea").addClass("hide");
      $(this).children("td").children("button").addClass("hide");
      $(this).children("td").children("i").addClass("hide");
   
   } else if (currentHour === slotHour) {
      $(this).toggleClass("now");
   };
});

// if ((currentHour > rowTime)) {
//    $("#t08Row").toggleClass("past");

// } else if (currentHour === rowTime) {
//    $("#t08Row").toggleClass("now");
// };














// var timeSlotArray = ["t07", "t08", "t09", "t10", "t11", "t12", "t13", "t14", "t15", "t16", "t17", "t18", "t19"];

// userTask = "time to sleep";

// $("8")

// for (let i = 0; i < timeSlotArray.length; i++) {
//    eval('var ' + timeSlotArray[i] + '= "' + userTask +'";');
// }

// var timeSlotArrayIndex;

// var hrNum = 11;

// timeSlotArrayIndex = hrNum - 7;

// eval('var ' + timeSlotArray[timeSlotArrayIndex] + '= "' + userTask +'";');

// console.log("t11 is:", t11);

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