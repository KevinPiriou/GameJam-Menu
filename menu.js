const gameNewButton = document.getElementById("btnNew"); // START BUTTON GAME
const gameTest = document.getElementById("gameroom"); //TODO: CANVAS OR DOM ?? = GAME DISPLAY
const gameExitButton = document.getElementById("btnExit"); // EXIT BUTTON GAME 
const gameDebug = document.getElementById("debug"); // LOG DEBUG ON GAME DISPLAY
const menuTitle = document.getElementsByTagName('h1')[0] // TITLE GAME IN MENU
const scoreGame = document.getElementById("scoreBoard"); // SCORE
let counter = 0;


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}





gameNewButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element 
    gameTest.style.backgroundImage = "none";
    gameNewButton.style.visibility = "hidden";
    gameExitButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    // LOOP START GAME
    sleep(10);
    gameTest.style.backgroundColor = "green"; //Test STARTGAME
    gameDebug.innerText = "Debug: RUNNING GAME <% //TODO: delete this %>";
});

gameExitButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element
    gameExitButton.style.visibility = "hidden";
    gameNewButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    // GAME BREAK
    sleep(10);
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
    sleep(10);
    gameDebug.innerText = "Debug: LOSING GAME <% //TODO: delete this %>"

});