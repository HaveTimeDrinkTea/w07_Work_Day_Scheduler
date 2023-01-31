$(document).ready(function() {
   //-- START of document.ready
   //--====================== 
   //--====================== 
   
   //-- Get time to display in jumbotron and schedule header
   
   var thisMoment = new Date();
   
   setInterval(function() {
      let now = moment(thisMoment).format("ddd, Do MMM YYYY HH:mm:ss") ;
      $("#currentDay").text(now);
   }, 1000);
   
   // console.log(today.toLocaleDateString());
   
   $('#todayDate').text("Today is a Brand New " + moment(thisMoment).format("Do MMMM YYYY"));
   
   
   //-- Get current date and hour
   
   let currentHour;
   
   //-- parameter to set current hour to a fixed number 12 
   //-- see listener function on button #btnAddMockTime
   
   let getCurrentHour = localStorage.getItem("currentHour");
   
   console.log("on page load, the getCurrentHour is:", getCurrentHour); 
   
   if (getCurrentHour === "12") {
      currentHour = 12;
   } else {
      currentHour = parseInt(thisMoment.getHours());
   };
   
   console.log("after checking isUseMock, the currentHour is:", currentHour);
   
   
   
   //-- get the current date
   let currentDate = moment(thisMoment).format("DD-MMM-YYYY");
   console.log("currentDate:", currentDate);
   
   
   let slotHourStringID;
   let slotHourDisplay;
   let slotEntryStoredByID;
   
   var userEntryStored;
   
   
   let textToDisplay =[];
   
   
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
   
         for (let i = 0; i < slotEntryStoredByID.length; i++) {
            console.log("SlotEntry for", slotHourDisplay + ":", slotEntryStoredByID);
            console.log("selected text in for loop:", slotEntryStoredByID.userText);
            
            let selectedText = "<i class='fa fa-thumb-tack' aria-hidden='true'></i> " + slotEntryStoredByID[i].userText;
            if (i === 0) {
               textToDisplay = selectedText;

            } else {
   
            textToDisplay = textToDisplay + " <br> " + selectedText;
         
            
         }
         $("#t"+ slotHourStringID + "Entry").html(textToDisplay);
      };
         textToDisplay = "";
         ;
      } else {
         console.log("I'm here in display!");
      };
   
   }
   //-- end of renderUserEntry(slotHourStringID)
   
   //-- start of rendering each row background colour
   
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
   
   
   $(".btnSave").on("click", function(){
   
      // get new user input in the textarea
      let userTextInput = $(this).parent().siblings().children("#userTextInput").val();
      console.log("userTextInput BEFORE null check:", userTextInput);

      // check for null entry
      if (!userTextInput) {
         console.log("userTextInput during null check:", userTextInput);
         let errorMsg = $("<div>");
         errorMsg.addClass("msgError").html("<i class='fa fa-bullhorn' aria-hidden='true'></i> <br> Nothing to save here, my darling!  <br> (click to <i class='fa fa-trash' aria-hidden='true'></i> me!)");
         $(this).after(errorMsg);
         
         $(".msgError").on('click', function(e) { //
            $(".msgError").hide();
            $(".msgError").unbind();
         });
         userTextInput = null;
         return;
      } else { 
         // get the local Storage before updating it.
         getLocalStorage();
   
         slotHourStringID = $(this).parent().parent().attr("id").substring(1,3);
   
         console.log("Get User Input: slotHourStringID:", slotHourStringID);
   
         let userEntryArray = userEntryStored;
            userEntryArray.push({
            entryDate: currentDate,
            timeSlot: slotHourStringID,
            userText: userTextInput,
         });
         
         // clear the form input element
         $(this).parent().siblings().children("#userTextInput").val("");
         userTextInput = null;
         // Save text in local storage
         localStorage.setItem("userEntryArray", JSON.stringify(userEntryArray));
      
         renderUserEntry(slotHourStringID);
      };
      
      console.log("userTextInput AFTER null check:", userTextInput);
      return;
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
   
   
   //-----------------------------------
   //-- Button listeners for creating mock data and set time slot
   //-----------------------------------
   
   $("#btnAddMockData").on("click", function() {
      
      console.log ("Mock Data Array for testing is:", mockDataArray);
      // Save text in local storage
      localStorage.setItem("userEntryArray", JSON.stringify(mockDataArray));
      location.reload();   
   });
   
   
   $("#btnAddMockTime").on("click", function() {
      
      localStorage.getItem("currentHour");
   
      if (getCurrentHour === "12") {
         localStorage.removeItem("currentHour");
      } else {
         localStorage.setItem("currentHour", "12");
      };
      location.reload();  
      // console.log ("isUseMock before: ", isUseMock);
      // // flip the isUseMock flag
      // isUseMock = localStorage.getItem("isUseMock");
      // if (isUseMock === null) {
      //    isUseMock = !isUseMock;
      //    localStorage.setItem("isUseMock", isUseMock);
      // } else {
      //    localStorage.removeItem("isUseMock");
      // };
      // console.log ("isUseMock after: ", isUseMock);
      // location.reload();  
   });

   //-- JQuery Date Picker
   $( function() {
      $( "#datepicker" ).datepicker();
   } );
   
   
      
   //--====================== 
   //--======================  
   //-- END of document.ready
   });   