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
let currentHour = 15;
let currentDate = moment(thisMoment).format("DD-MMM-YYYY");
console.log("currentDate:", currentDate);

let userEntryArray = [];

//-- get any stored data in local; storage

function getLocalStorage() {
   userEntryStored = JSON.parse(localStorage.getItem("userEntryArray"));
   
   if (userEntryStored === null) {
      userEntryStored = [];
   };
   console.log("userEntryArray:", userEntryStored);
   return userEntryStored;
}

getLocalStorage();

//-- Colour each hourly slot according to time of day
$("#daySchedule > tr").each(function() {
   
   let slotHourString = $(this).children().attr("id").substring(0,2);
   let slotHour = parseInt(slotHourString);

   // var result = userEntryStored.find(item => ((item.entryDate === currentDate) && (item.timeSlot === slotHourString)));

   console.log("slotHourString:", slotHourString);
   console.log("slotHourString is a", typeof slotHourString);
   
   var timeSlotEntry = userEntryStored.find(element => (element.timeSlot === slotHourString));
   if (timeSlotEntry != undefined) { 
   console.log("timeSlotEntry for", slotHourString + ":", timeSlotEntry);
   console.log("selected text:", timeSlotEntry.userText);
   $("#t"+ slotHour + "Entry").text(timeSlotEntry.userText);
   };
   
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
   
   getLocalStorage();

   let userTextInput = $(this).parent().siblings().children("#userTextInput").val();
   console.log("userTextInput:", userTextInput);
   let slotHourString = $(this).parent().parent().attr("id").substring(1,3);
   
   let userEntryArray = userEntryStored;
   userEntryArray.push({
      entryDate: currentDate,
      timeSlot: slotHourString,
      userText: userTextInput,
   });

   // Save text in local storage
   localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
});








//-- END of document.ready
});   