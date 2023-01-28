$(document).ready(function() {
//-- START of document.ready

//-- Get time to display in jumbotron
const timeCurrentPElQ = document.querySelector("#currentDay");

setInterval(function() {
   let now = moment().format("ddd, Do MMM YYYY HH:mm:ss") ;
   timeCurrentPElQ.textContent = now;
}, 1000);


//-- END of document.ready
});   