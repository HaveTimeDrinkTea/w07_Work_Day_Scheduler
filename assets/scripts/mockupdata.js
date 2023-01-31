// This script creates mock up data for the Work Day Scheduler App
let today = new Date();

let currentDate = moment(today).format("DD-MMM-YYYY");
let yesterdayDate = moment(moment(today).subtract(1,"d")).format("DD-MMM-YYYY");


console.log("today is:", currentDate);
console.log("yesterday is:",yesterdayDate);


let mockDataArray = [
   {
      "entryDate":currentDate
      ,"timeSlot":"08"
      ,"userText":"Eat a wholesome breakfast."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"07"
      ,"userText":"Do yoga."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"07"
      ,"userText":"meditate then drink tea!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"09"
      ,"userText":"Go to work."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"10"
      ,"userText":"Get into office and avoid talking to people as I have got lots to do!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"11"
      ,"userText":"Have a think about lunch whilst coding!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"12"
      ,"userText":"Is it time for lunch yet?"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"08"
      ,"userText":"This is to test duplicate entry in a time slot."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"13"
      ,"userText":"Yes! Let us eat some yummy food!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"14"
      ,"userText":"Better put my head down and do more coding before the day ends!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"14"
      ,"userText":"This is another duplicate entry for the same hour."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"15"
      ,"userText":"Feeling hungry. What is for dinner tonight?"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"16"
      ,"userText":"Check the status of the London Underground to see if there are any stoppages."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"17"
      ,"userText":"Get some pizza on the way home!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"17"
      ,"userText":"Remember to do Git Commits and Git Push!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"17"
      ,"userText":"Got to meet the target of 200 commits by end of term!"
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"18"
      ,"userText":"Do some breathing exercises whilst on the way home."
   }
   ,{
      "entryDate":currentDate
      ,"timeSlot":"19"
      ,"userText":"Enjoy pizza and watch some Korean drama on Netflix."
   }
   ,{
      "entryDate":yesterdayDate
      ,"timeSlot":"19"
      ,"userText":"(YESTERDAY DATA) Entertain Milo the dog till he is tired."
   }
   ,{
      "entryDate":yesterdayDate
      ,"timeSlot":"12"
      ,"userText":"(YESTERDAY DATA) Get some lovely bread!"
   }
];


