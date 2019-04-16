
fired = 0;

function startGame() {
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("instructions-text").style.display = "block";
}

function closeInstructions() {
    document.getElementById("instructions-text").style.display = "none";
    document.getElementById("pad1").style.display = "block";
    document.getElementById("pad2").style.display = "block";
}

document.onkeyup = function(event) {
        // ...now has Boolean value true.
        if(fired === 0) {
            fired++
            startGame();
        } else if (fired === 1) {
            closeInstructions();

        }
};

document.onclick= function(event) {
    // ...now has Boolean value true.
    if(fired === 0) {
        fired++
        startGame();
    } else if (fired === 1) {
        closeInstructions();
    }
};

$( "#C3P0" ).click(function() {
    $(this)
        .css('display','none')
});

