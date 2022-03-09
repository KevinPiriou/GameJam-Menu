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
const losingEffect = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav");
//const menuMusic = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg");
const gameMusic = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3");
const effectMenu = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav");


//// FUNCTION
//////// FUNCTION SLEEP
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
    effectMenu.play();
    // LOOP START GAME
    sleep(100);
    gameMusic.play();
    //gameTest.style.backgroundColor = "green"; //Test STARTGAME
    //scoreGame.style.visibility = "visible";
    //scoreGame.innerText = 'Score:' + Math.round(game.time.now);
    gameDebug.innerText = "Debug: RUNNING GAME || TODO: add game in gameroom %>";

});
/////// DOM CREDIT
gameCreditButton.addEventListener('click', function(event) {
    event.preventDefault;
    // Hide Element
    gameCreditButton.style.visibility = "hidden";
    newGameButton.style.visibility = "hidden";
    menuTitle.style.visibility = "hidden";
    tutoControl.style.visibility = "hidden";
    scoreGame.style.visibility = "hidden";
    // Visible
    paraCredit.style.visibility = "visible";
    // GAME BREAK
    sleep(10);
    gameTest.style.backgroundColor = "rgb(16, 24, 32)"; //CREDIT
    gameDebug.innerText = "Debug: CREDIT || TODO: add real credit + animation %>";
    paraCredit.style.fontFamily = "Roboto";
    paraCredit.style.color = "white";
    paraCredit.innerText = "Merci d'avoir joué à ce magnifique jeu créer par Jordan et Kevin";
    credits.appendChild(paraCredit);

});
/////// DOM LOSE GAME
gameTest.addEventListener('dblclick', function(event) {
    event.preventDefault;
    // Replace Element
    gameMusic.pause();
    losingEffect.play();
    gameTest.style.backgroundImage = `url("http://image.noelshack.com/fichiers/2022/10/3/1646826142-fondmenugame.jpg")`;
    gameTest.style.backgroundColor = "linear-gradient(0deg, rgba(16,24,32,1) 0%, rgba(33,37,41,1) 100%);"; //Test LOSE CONDITION GAME
    gameCreditButton.style.visibility = "visible";
    newGameButton.style.visibility = "visible";
    menuTitle.style.visibility = "visible";
    paraCredit.style.visibility = "hidden";
    scoreGame.style.visibility = "visible";
    scoreGame.innerText = "TU AS PERDU, T'ES MAUVAIS !" + " TON SCORE:";
    tutoControl.style.visibility = "hidden";
    // OUT LOOP CONDITION = GAME OVER
    sleep(10);
    gameDebug.innerText = "Debug: GAME OVER || TODO: add score of player and restart // new game %>"
});