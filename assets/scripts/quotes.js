var quotesArray = [
"If it is out of your hands, it deserves freedom from your mind too."
, "Make peace, be kind, be gentle."
, "The only way to live is by accepting each minute as an unrepeatable miracle."
, "The body benefits from movement, and the mind benefits from stillness."
, "Educating the mind without educating the heart is no education at all."
, "When you focus on the good, the good gets better."  
, "In a world full of doing, doing, doing, it is important to take a moment to just breathe, to just be."
, "Your calm mind is the ultimate weapon against your challenges. So relax."
, "The still waters of a lake reflect the beauty around it. When the mind is still, the beauty of the self is reflected."
, "Just when you feel you have no time to relax, know this is the moment you most need to relax."
, "When you want to succeed, as much as you want to breathe, then you’ll be successful."
, "The mind that opens to a new idea never returns to its original size."
, "Believe you can, and you are halfway there."
, "The mind is like water. When it is turbulent, it is difficult to see. When it is calm, everything becomes clear."
, "The mind is just like a muscle; the more you exercise it, the stronger it gets, and the more it can expand."
, "Today I will live in the moment. Unless the moment is unpleasant, in which case I will eat a cookie."
, "Breathe in the good stuff. Breathe out the bad stuff."
, "If a cluttered desk is a sign of a cluttered mind, of what, then is an empty desk a sign?"
, "A mind is like a parachute. It does not work if it is not open."
, "Within you, there is a stillness and a sanctuary to which you can retreat at any time."
, "Worrying is like walking around with an umbrella waiting for it to rain."
, "No matter how difficult the past, you can always begin again today."
, "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor."
, "Be happy in the moment. That is enough."
, "Be where you are; otherwise you will miss your life."
, "Our life is shaped by our mind, for we become what we think."
, "If you cannot do anything about it, then let it go. "
, "Quiet the mind, and the soul will speak."
, "When there is nothing to do;- do nothing."
, "Nature does not hurry, yet everything is accomplished."
, "Mindfulness is a pause; the space between stimulus and response. That is where choice lies."
];

let randomIndex = Math.floor(Math.random() * quotesArray.length);

console.log("the random index:", randomIndex);

console.log(quotesArray[randomIndex]);

$('#quoteOfDay').text(quotesArray[randomIndex]);