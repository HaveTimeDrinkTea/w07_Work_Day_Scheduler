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

let currentHour = parseInt(thisMoment.getHours());
// let currentHour = 15;
let currentDate = moment(thisMoment).format("DD-MMM-YYYY");
console.log("currentDate:", currentDate);


let slotHourStringID;
let slotHourDisplay;
let slotEntryStoredByID;

var userEntryStored;


let textToDisplay;


let EntryStoredTodayOnly;

//-- 
function init() {
   renderUserEntry(slotHourStringID);
};


//-- get any stored data in local storage

function getLocalStorage() {
   userEntryStored = JSON.parse(localStorage.getItem("userEntryArray"));
   
   if (userEntryStored === null) {
      userEntryStored = [];
   };
   console.log("userEntryArray from localStorage:", userEntryStored);
   return userEntryStored;
}



function renderUserEntry(slotHourStringID) {

   getLocalStorage();

   console.log("inside renderUserEntry() and the slotHourStringID is", slotHourStringID);

   slotEntryStoredByID = userEntryStored.filter(element => (element.timeSlot === slotHourStringID));

   console.log("slotEntryStoredByID array:",slotEntryStoredByID);

   if (slotEntryStoredByID != undefined) { 

      // let userStoredTimeSlot = slotEntryStored.timeSlot;
      
      // console.log("storedTimeSlot:", parseInt(slotEntryStored.timeSlot));

      for (let i = 0; i < slotEntryStoredByID.length; i++) {
         console.log("SlotEntry for", slotHourDisplay + ":", slotEntryStoredByID);
         console.log("selected text:", slotEntryStoredByID.userText);

         textToDisplay = textToDisplay + "<br><i class='fa fa-thumb-tack' aria-hidden='true'></i> " + slotEntryStoredByID[i].userText;
      
         $("#t"+ slotHourStringID + "Entry").html(textToDisplay);
      }
      textToDisplay = "";
      ;
   } else {
      console.log("I'm here in display!");
   };

}


$("#daySchedule > tr").each(function() {
      
   slotHourStringID  = $(this).attr("id").substring(1,3);
   slotHourDisplay = parseInt(slotHourStringID);

   console.log("slotHourStringId:", slotHourStringID);
   console.log("slotHourDisplay: ", slotHourDisplay, "and it is a type of:", typeof slotHourDisplay);
   
   renderUserEntry(slotHourStringID);
   
   if ((currentHour > slotHourDisplay)) {
      $(this).toggleClass("past");
      $(this).children("td").children("textarea").addClass("hide");
      $(this).children("td").children("button").addClass("hide");
      $(this).children("td").children("i").addClass("hide");
   
   } else if (currentHour === slotHourDisplay) {
      $(this).toggleClass("now");
   };

   
}); //-- end of for each function to set background color




//-- set listener on save button to capture user text entry

// function handleSaveBtn() {

// }

$(".btnSave").on("click", function(){

   // get the local Storage before updating it.
   getLocalStorage();

   // get new user input in the textarea
   let userTextInput = $(this).parent().siblings().children("#userTextInput").val();
   console.log("userTextInput:", userTextInput);

   slotHourStringID = $(this).parent().parent().attr("id").substring(1,3);

   console.log("Get User Input: slotHourStringID:", slotHourStringID);

   let userEntryArray = userEntryStored;
   userEntryArray.push({
      entryDate: currentDate,
      timeSlot: slotHourStringID,
      userText: userTextInput,
   });

   // Save text in local storage
   localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
   
   renderUserEntry(slotHourStringID);
   
   // clear the form input element
   $(this).parent().siblings().children("#userTextInput").val(" ");

});


$("#btnDeletePast").on("click", function(){
   
   console.log(currentDate);

   getLocalStorage();

   EntryStoredTodayOnly = userEntryStored.filter(element => (
      element.entryDate >= currentDate));
      
      
   console.log("EntryStoredTodayOnly:", EntryStoredTodayOnly);

     // Save text in local storage
   localStorage.setItem("userEntryArray", JSON.stringify(EntryStoredTodayOnly));
   location.reload();
});

$("#btnAddMockData").on("click", function() {
   
   console.log ("Mock Data Array for testing is:", mockDataArray);
   // Save text in local storage
   localStorage.setItem("userEntryArray", JSON.stringify(mockDataArray));
   location.reload();   
});




//-- END of document.ready
});   