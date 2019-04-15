
wins = 0;
losses = 0;
hangmanImagesArrayValue = 0;
hangmanImagesArray = [
    "assets/images/hangman1.png",
    "assets/images/hangman2.png",
    "assets/images/hangman3.png",
    "assets/images/hangman4.png",
    "assets/images/hangman5.png",
    "assets/images/hangman6.png",
    "assets/images/hangman7.png",];

lettersGuessedArray = [];
animalUnderscores = [];
fired = false;
var animalList = {
    animal1: "jaguar",
    animal2: "sloth",
    animal3: "frog",
    animal4: "toucan",
    animal5: "monkey",
    animal6: "anaconda",
    animal7: "parrot",
    animal8: "butterfly",
    animal9: "tapir",
    animal10: "spider",
    startGame: function() {
        document.getElementById("intro-text").style.display = "none";
        document.getElementById("begin-frog").style.display = "block";
        window.setTimeout("document.getElementById('begin-frog').style.display='none';", 1500);
    },
}

// Stores an array of property values derived from the object "animalList" in variable "animalsArray"
// The property values are my list of animals that will be used in the hangman game 
var animalsArray = Object.values(animalList);
// Stores a randomly chosen property value in variable "randomAnimal" from the first 10 values of the animalList array (beyond 10 are functions)
// This selects an animal from the list to be used in the hangman game.
randomAnimal = animalsArray[Math.floor(Math.random() * 10)];
// Loops through each letter of the randomly chosen animal name
console.log(randomAnimal);
for (i = 0; i < randomAnimal.length; i++) {
    // For each letter of the randomly chosen animal name, stores an underscore in the variable "animalUnderscores"
    animalUnderscores.push("_");
    // Coverts underscores to html and displays them in div "underscoresHere", along with text saying how many letters...
    // ... are in the word.
    document.getElementById("underscoresHere").innerHTML = animalUnderscores.join(' ') + " (" + randomAnimal.length + " letters)";
}

// The following set of actions will execute when any key is released.
document.onkeyup = function(event) {
    // If the key that is pressed is a letter, converts to lowercase and stores in variable.
    letter = String.fromCharCode(event.keyCode).toLowerCase();
    // Variable "fired" has a default Boolean value of false. 
    // When any key is pressed, "fired" is is given Boolean value true.
    // Function starGame executes.
    // The if statement will prohibit startGame from executing again, because fired...
    // ...now has Boolean value true.
    if(!fired) {
        fired = true;
        animalList.startGame();
        var audio1 = new Audio('assets/sounds/intro-sounds.wav');
                    audio1.play();
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    // The following code will execute after the second time a key is released.
    } else if (fired) {
            // Checks to see if the key that was pressed is a letter
            if(!/^[a-z]/.test(letter)) {
                // If the key that was pressed is a not letter, a reminder to press any letter is executed.
                document.getElementById("reminder-text").style.display = "block";
                window.setTimeout("document.getElementById('reminder-text').style.display='none';", 1500);
            // If a letter is pressed, the following code executes:
            } else {
                
                randomAnimalLettersArray = randomAnimal.split('');
                randomAnimalLettersArrayIndices = [];
                    
                lettersGuessedArray.push(letter);
                document.getElementById("alreadyGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessedArray.join(' ');


                for (i = 0; i < randomAnimalLettersArray.length; i++) {
                    
                    if (letter === randomAnimalLettersArray[i]) {
                        randomAnimalLettersArrayIndices.push(i);
                    } 
                }   
               
                if (randomAnimalLettersArrayIndices.length == 0) {
                    hangmanImagesArrayValue += 1;
                }

                document.getElementById("hangman").src = hangmanImagesArray[hangmanImagesArrayValue];

                randomAnimalLettersArrayIndices.forEach(index => {
                    animalUnderscores[index] = letter;
                });
                
                document.getElementById("underscoresHere").innerHTML = animalUnderscores.join(' ') + " (" + randomAnimal.length + " letters)";

                if (hangmanImagesArrayValue == 6) {
                    losses++;
                    document.getElementById("losses").innerHTML = "Losses: " + losses;
                    document.getElementById("hangman").src = hangmanImagesArray[0];
                    hangmanImagesArrayValue = 0;
                    lettersGuessedArray = [];
                    animalUnderscores = [];
                    document.getElementById("alreadyGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessedArray.join(' ');
                    randomAnimal = animalsArray[Math.floor(Math.random() * 10)];
                    for (i = 0; i < randomAnimal.length; i++) {
                        
                        animalUnderscores.push("_");
                        document.getElementById("underscoresHere").innerHTML = animalUnderscores.join(' ') + " (" + randomAnimal.length + " letters)";
                    }
                    var audio = new Audio('assets/sounds/monkey-sound.ogg');
                    audio.play();
                }
              
                if (randomAnimal == (animalUnderscores.join("")) ) {
                    wins++;
                    document.getElementById("wins").innerHTML = "Wins: " + wins;
                    document.getElementById("hangman").src = hangmanImagesArray[0];
                    hangmanImagesArrayValue = 0;
                    lettersGuessedArray = [];
                    animalUnderscores = [];
                    document.getElementById("alreadyGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessedArray.join(' ');


                    if (randomAnimal == animalList.animal1) {
                        document.getElementById("jaguar-image").style.display = "block";
                        window.setTimeout("document.getElementById('jaguar-image').style.display='none';", 3000);
                        var audioJaguar = new Audio('assets/sounds/audioJaguar.mp3');
                        audioJaguar.play();
                    }

                    if (randomAnimal == animalList.animal2) {
                        document.getElementById("sloth-image").style.display = "block";
                        window.setTimeout("document.getElementById('sloth-image').style.display='none';", 3000);
                        var audioSloth = new Audio('assets/sounds/audioSloth.mp3');
                        audioSloth.play();
                    }

                    if (randomAnimal == animalList.animal3) {
                        document.getElementById("frog-image").style.display = "block";
                        window.setTimeout("document.getElementById('frog-image').style.display='none';", 3000);
                        var audioFrog = new Audio('assets/sounds/audioFrog.mp3');
                        audioFrog.play();
                    }

                    if (randomAnimal == animalList.animal4) {
                        document.getElementById("toucan-image").style.display = "block";
                        window.setTimeout("document.getElementById('toucan-image').style.display='none';", 3000);
                        var audioToucan = new Audio('assets/sounds/audioToucan.mp3');
                        audioToucan.play();
                    }

                    if (randomAnimal == animalList.animal5) {
                        document.getElementById("monkey-image").style.display = "block";
                        window.setTimeout("document.getElementById('monkey-image').style.display='none';", 3000);
                        var audioMonkey = new Audio('assets/sounds/audioMonkey.mp3');
                        audioMonkey.play();
                    }

                    if (randomAnimal == animalList.animal6) {
                        document.getElementById("anaconda-image").style.display = "block";
                        window.setTimeout("document.getElementById('anaconda-image').style.display='none';", 3000);
                        var audioAnaconda = new Audio('assets/sounds/audioAnaconda.mp3');
                        audioAnaconda.play();
                    }

                    if (randomAnimal == animalList.animal7) {
                        document.getElementById("parrot-image").style.display = "block";
                        window.setTimeout("document.getElementById('parrot-image').style.display='none';", 3000);
                        var audioParrot = new Audio('assets/sounds/audioParrot.mp3');
                        audioParrot.play();
                    }

                    if (randomAnimal == animalList.animal8) {
                        document.getElementById("butterfly-image").style.display = "block";
                        window.setTimeout("document.getElementById('butterfly-image').style.display='none';", 3000);
                        var audioButterfly = new Audio('assets/sounds/audioButterfly.mp3');
                        audioButterfly.play();
                    }

                    if (randomAnimal == animalList.animal9) {
                        document.getElementById("tapir-image").style.display = "block";
                        window.setTimeout("document.getElementById('tapir-image').style.display='none';", 3000);
                        var audioTapir = new Audio('assets/sounds/audioTapir.mp3');
                        audioTapir.play();
                    }

                    if (randomAnimal == animalList.animal10) {
                        document.getElementById("spider-image").style.display = "block";
                        window.setTimeout("document.getElementById('spider-image').style.display='none';", 3000);
                        var audioSpider = new Audio('assets/sounds/audioSpider.mp3');
                        audioSpider.play();
                    }
                    
                    randomAnimal = animalsArray[Math.floor(Math.random() * 10)];
                    for (i = 0; i < randomAnimal.length; i++) {
                        
                        animalUnderscores.push("_");
                        document.getElementById("underscoresHere").innerHTML = animalUnderscores.join(' ') + " (" + randomAnimal.length + " letters)";
                    }
                }


                console.log(randomAnimal);
                
            }
        }
};
