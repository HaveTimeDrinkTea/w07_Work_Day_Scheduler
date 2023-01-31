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
 
   
   $('#todayDate').text("Today is a Brand New " + moment(thisMoment).format("Do MMMM YYYY"));
   
   
   //-- Get current date and hour
   
   let currentHour;
   
   //-- parameter to set current hour to a fixed number 12 
   //-- see listener function on button #btnAddMockTime
   
   let getCurrentHour = localStorage.getItem("currentHour");
   
   // console.log("on page load, the getCurrentHour is:", getCurrentHour); 
   
   if (getCurrentHour === "12") {
      currentHour = 12;
   } else {
      currentHour = parseInt(thisMoment.getHours());
   };
   
   // console.log("after checking isUseMock, the currentHour is:", currentHour);
   
   
   
   //-- get the current date
   let currentDate = moment(thisMoment).format("DD-MMM-YYYY");
   // console.log("currentDate:", currentDate);
   
   
   let slotHourStringID;
   let slotHourDisplay;
   let slotEntryStoredByID;
   
   var userEntryStored;
   
   let textToDisplay =[];
   
   let EntryStoredTodayOnly;

   
   
   //-- get any stored data in local storage
   
   function getLocalStorage() {
      userEntryStored = JSON.parse(localStorage.getItem("userEntryArray"));
      
      if (userEntryStored === null) {
         userEntryStored = [];
      };

      return userEntryStored;
   }
   
   
   
   function renderUserEntry(slotHourStringID) {
   
      getLocalStorage();
   
      slotEntryStoredByID = userEntryStored.filter(element => (element.timeSlot === slotHourStringID));

   
      if (slotEntryStoredByID != undefined) { 
   
         for (let i = 0; i < slotEntryStoredByID.length; i++) {
            
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
      } 
      // else {
      //    console.log("I'm here in display!");
      // }
      // ;
   
   }
   //-- end of renderUserEntry(slotHourStringID)
   
   //-- start of rendering each row background colour
   
   $("#daySchedule > tr").each(function() {
         
      slotHourStringID  = $(this).attr("id").substring(1,3);
      slotHourDisplay = parseInt(slotHourStringID);

      
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

      // check for null entry
      if (!userTextInput) {

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

      return;
   });

   
   
   $("#btnDeletePast").on("click", function(){
   
      getLocalStorage();
   
      EntryStoredTodayOnly = userEntryStored.filter(element => (
         element.entryDate >= currentDate));
   
        // Save text in local storage
      localStorage.setItem("userEntryArray", JSON.stringify(EntryStoredTodayOnly));
      location.reload();
   });
   
   
   //-----------------------------------
   //-- Button listeners for creating mock data and set time slot
   //-----------------------------------
   
   $("#btnAddMockData").on("click", function() {

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
   });
   
   
      
   //--====================== 
   //--======================  
   //-- END of document.ready
   });   