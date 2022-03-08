let gameNewButton = document.getElementById("btnNew"); // START BUTTON GAME
let gameTest = document.getElementById("gameroom"); //TODO: CANVAS OR DOM ?? = GAME DISPLAY
let gameExitButton = document.getElementById("btnExit"); // EXIT BUTTON GAME 
let gameDebug = document.getElementById("debug"); // LOG DEBUG ON GAME DISPLAY
let menuTitle = window.document.getElementsByTagName('h1')[0] // TITLE GAME IN MENU


gameNewButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element 
    gameTest.style.backgroundImage = "none";
    gameNewButton.style.visibility = "hidden";
    gameExitButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    // LOOP START GAME
    gameTest.style.backgroundColor = "green"; //Test STARTGAME
    gameDebug.innerText = "Debug: RUNNING GAME <% //TODO: delete this %>";
});

gameExitButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element
    gameExitButton.style.visibility = "hidden";
    gameNewButton.style.visibility = "hidden";
    // GAME BREAK
    gameTest.style.backgroundColor = "red"; //Test EXIT GAME
    gameDebug.innerText = "Debug: EXIT GAME <% //TODO: delete this %>"

});


gameTest.addEventListener('dblclick', function(event) {
    event.preventDefault;
    // Replace Element 
    gameTest.style.background = "rgb(16, 24, 32)";
    gameTest.style.backgroundColor = "linear-gradient(0deg, rgba(16,24,32,1) 0%, rgba(33,37,41,1) 100%);"; //Test LOSE CONDITION GAME
    gameExitButton.style.visibility = "visible";
    gameNewButton.style.visibility = "visible";
    menuTitle.style.visibility = "visible";
    // OUT LOOP CONDITION = PLAYER LOSING
    gameNewButton.innerText = "RESTART";
    gameDebug.innerText = "Debug: LOSING GAME <% //TODO: delete this %>"

});