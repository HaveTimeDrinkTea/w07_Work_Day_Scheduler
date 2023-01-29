$(document).ready(function() {
//-- START of document.ready

//-- Get time to display in jumbotron and schedule header

var thisMoment = new Date();

setInterval(function() {
   let now = moment(thisMoment).format("ddd, Do MMM YYYY HH:mm:ss") ;
   $("#currentDay").text(now);
}, 1000);

// console.log(today.toLocaleDateString());

$('#todayDate').text(moment(thisMoment).format("Do MMM YYYY"));


//-- Get current date and hour

// let currentHour = parseInt(thisMoment.getHours());
let currentHour = 11;
let currentDate = moment(thisMoment).format("DD-MMM-YYYY");
console.log("currentDate:", currentDate);


//-- Colour each hourly slot according to time of day
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

   
}); //-- end of for each function to set background color


//-- set listener on save button to capture user text entry

$(".btnSave").on("click", function () {
   // Get nearby values of the description in JQuery
   
   
   let userEntryArray = JSON.parse(localStorage.getItem("userEntryArray"));
   
   if (userEntryArray === null) {
      userEntryArray = [];
   };

   let userTextInput = $(this).parent().siblings().children("#userTextInput").val();
   console.log("userTextInput:", userTextInput);
   let slotHourString = $(this).parent().parent().attr("id").substring(1,3);
   
   userEntryArray.push({
      entryDate: currentDate,
      timeSlot: slotHourString,
      userText: userTextInput,
   });

   // Save text in local storage
   localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
})


   // let numTimeSlots = 20;
   // let slotHourString = "";

   // for(let i = currentHour; i < numTimeSlots; i++) {
   //    if (i < 10 ) {
   //       slotHourString = "0" + i;
   //    } else {
   //       slotHourString = "" + i;
   //    };
   //    setUserEntry();
  
   // };

      
   //    function setUserEntry() {   
   //    $("#saveT" + slotHourString).on("click", function() {
   //       let userEntryArray = JSON.parse(localStorage.getItem("userEntryArray"));
      
   //       if (userEntryArray === null) {
   //       userEntryArray = [];
   //       };
      
   //       let userTextInput = $("#t" + slotHourString+ "TextInput").val();
   //       console.log("userTextInput:", userTextInput);
      
   //       userEntryArray.push({
   //          entryDate: currentDate,
   //          timeSlot: currentHour,
   //          userText: userTextInput,
   //       });
      
   //       console.log("userEntryArray:", userEntryArray)
      
   //       localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
      
   //    }); //-- end of onclick listener
   // }; //-- end of function setUserEntry






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