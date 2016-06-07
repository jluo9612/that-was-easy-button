
//1. play sound function
function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play(); //built-in play function
}

//2. linking button to jQuery event
$("#easy").on("click", sayThatWasEasy); //on's two arguments: event and result
//# in front of id name

//3. change the appearance of the button(using CSS)
