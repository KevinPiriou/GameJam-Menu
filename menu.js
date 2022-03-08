//// INIT CONST
const newGameButton = document.getElementById("btnNew"); // START BUTTON GAME
const gameTest = document.getElementById("gameroom"); //TODO: CANVAS OR DOM ?? = GAME DISPLAY
const gameCreditButton = document.getElementById("btnCredit"); // EXIT BUTTON GAME 
const gameDebug = document.getElementById("debug"); // LOG DEBUG ON GAME DISPLAY
const menuTitle = document.getElementsByTagName('h1')[0] // TITLE GAME IN MENU
const scoreGame = document.getElementById("scoreBoard"); // SCORE
const tutoControl = document.getElementById("tuto");
const credits = document.getElementById("credit");
const paraCredit = document.createElement("p");

//// FUNCTION
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
//// DOM
/////// DOM START GAME
newGameButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element 
    gameTest.style.backgroundImage = "none";
    tutoControl.style.visibility = "hidden";
    newGameButton.style.visibility = "hidden";
    gameCreditButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    paraCredit.style.visibility = "hidden";
    scoreGame.style.visibility = "hidden";
    // LOOP START GAME
    sleep(10);
    gameTest.style.borderRadius = "0%";
    gameTest.style.backgroundColor = "green"; //Test STARTGAME
    gameDebug.innerText = "Debug: RUNNING GAME <% //TODO: delete this %>";
});
/////// DOM CREDIT
gameCreditButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element
    gameCreditButton.style.visibility = "hidden";
    newGameButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    tutoControl.style.visibility = "hidden";
    // Visible
    paraCredit.style.visibility = "visible";
    // GAME BREAK
    sleep(10);
    gameTest.style.backgroundColor = "rgb(16, 24, 32)"; //CREDIT
    gameDebug.innerText = "Debug: CREDIT  <% //TODO: delete this %>";
    paraCredit.style.fontFamily = "Roboto";
    paraCredit.innerText = "Merci d'avoir joué à ce magnifique jeu créer par Jordan et Kevin";
    credits.appendChild(paraCredit);

});
/////// DOM LOSE GAME
gameTest.addEventListener('dblclick', function(event) {
    event.preventDefault;
    // Replace Element
    gameTest.style.borderRadius = "90%";
    gameTest.style.background = "rgb(16, 24, 32)";
    gameTest.style.backgroundColor = "linear-gradient(0deg, rgba(16,24,32,1) 0%, rgba(33,37,41,1) 100%);"; //Test LOSE CONDITION GAME
    gameCreditButton.style.visibility = "visible";
    newGameButton.style.visibility = "visible";
    menuTitle.style.visibility = "visible";
    paraCredit.style.visibility = "hidden";
    scoreGame.style.visibility = "visible";
    tutoControl.style.visibility = "hidden";
    // OUT LOOP CONDITION = PLAYER LOSING
    sleep(10);
    gameDebug.innerText = "Debug: LOSING GAME <% //TODO: delete this %>"
});