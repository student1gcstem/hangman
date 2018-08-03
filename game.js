var wordOptions = ["lion", "panda", "lemur", "tiger", "monkey", "zebra"]
var selectedWord = ""
var lettersInWord = []
var numBlanks = 0 
var blanksAndSuccess = []
var wrongLetters = []

//game conditions
var winCount = 0
var lossCount = 0
var guessesLeft = 5

//functions
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
    lettersInWord = selectedWord.split("")
    numBlanks = lettersInWord.length
   
    //reset
    guessesLeft = 5
    wrongLetters = []
    blanksAndSuccess = []

    //

    for (var i=0; i<numBlanks; i ++){
        blanksAndSuccess.push("_")
    }

    console.log(selectedWord)
    console.log(lettersInWord)
    console.log(numBlanks)
    console.log(blanksAndSuccess)

    document.getElementById("wordSelected").innerHTML = blanksAndSuccess.join("  ")
    document.getElementById("guessesRemaining").innerHTML = guessesLeft
    document.getElementById("winCounter").innerHTML = winCount
    document.getElementById("lossCounter").innerHTML = lossCount

}

function checkLetters(letter) {
    //checks if letter exist in selected word
    
    var isLetterInWord = false

    for (var i=0; i<numBlanks; i++){
        if (selectedWord[i] == letter){
            isLetterInWord = true
        }
    }
    if(isLetterInWord){
        for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] == letter) {
                blanksAndSuccess[i] = letter
            }
        }
    }
    else {
        wrongLetters.push(letter);
            guessesLeft--
    }

    console.log(blanksAndSuccess)
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count " + lossCount + " | Guesses Left" + guessesLeft)
    // update html
    document.getElementById("guessesRemaining").innerHTML = guessesLeft;
    document.getElementById("wordSelected").innerHTML = blanksAndSuccess.join(" ")
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ")
    //check id user won
    if (lettersInWord.toString() == blanksAndSuccess.toString()) {
        winCount++
        alert("you win!")

        document.getElementById("winCounter").innerHTML = winCount

        startGame()
    }
    //checkif user lost
    else if (guessesLeft == 0){
        lossCount++;
        alert("you lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame()
    }
}   

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    roundComplete()
    console.log(letterGuessed)
}
