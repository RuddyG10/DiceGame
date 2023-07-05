// This function returns a random number between 1 to 6
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
//Take the dices objects from the document
    var dice1 = document.getElementById('img1');
    var dice2 = document.getElementById('img2');
//players variables
    var player1 = randomNumber();
    var player2 = randomNumber();

    // Change the dice paths
    dice1.src = '/DiceGame/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice' + player1 + '.png';
    dice2.src = '/DiceGame/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/dice' + player2 + '.png';

    if(player1>player2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Has Won!"
    }
    else if(player2>player1){
        document.querySelector("h1").innerHTML = "Player 2 Has Won! 🚩"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw"
    }


