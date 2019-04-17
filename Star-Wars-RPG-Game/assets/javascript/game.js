
fired = 0;
playerChosen = false;


function startGame() {
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("instructions-text").style.display = "block";
}

function closeInstructions() {
    document.getElementById("instructions-text").style.display = "none";
    // document.getElementById("pad1").style.display = "block";
    // document.getElementById("pad2").style.display = "block";
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



$( "#c3po" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#c3po-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: C3P0</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 20</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
            .css('display','none')
        $( "#c3po-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html('<h1>Computer: C3P0</h1>')
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 20</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#doikknats" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#doikknats-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html("<h1>Player: Doikk Na'ts</h1>")
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 25</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#doikknats-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Doikk Na'ts</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 25</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#greedo" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#greedo-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Greedo</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 60</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#greedo-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Greedo</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 60</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#jawa" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#jawa-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Jawa</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 20</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#jawa-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Jawa</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 20</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#filler2")
            .css('display','block')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#luke" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#luke-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Luke</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 65</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#luke-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Luke</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 75</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#obiwan" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#obiwan-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Obiwan</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 130</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        $( "#filler3")
            .css('display','block')
        playerChosen = true;
     } else {
        $(this)
        .css('display','none')
        $( "#obiwan-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Obiwan</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 175</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
     }
});

$( "#chewbacca" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#chewbacca-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Chewbacca</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 80</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        $( "#filler1")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#chewbacca-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Chewbacca</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 80</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
     }
});

$( "#eg6" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#eg6-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: EG6</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 15</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#eg6-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: EG6</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 15</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#han" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#han-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Han</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 115</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#han-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Han</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 65</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#leia" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#leia-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Leia</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 115</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#leia-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Leia</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 65</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#momawnadon" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#momawnadon-pad-attack")
            .css('display','block')
        $( "#attacker-info")
            .html('<h1>Player: Momaw Nadon</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 30</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#momawnadon-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Momaw Nadon</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 65</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

$( "#pondababa" ).click(function() {
    if (playerChosen === false) {
        $(this)
            .css('display','none')
        $( "#pondababa-pad-attack" )
            .css('display','block')
            $( "#attacker-info")
            .html('<h1>Player: Ponda Baba</h1>')
        $( "#attacker-info")
            .css('display','block')
        $( "#attacker-health")
            .html('<h1>Health: 45</h1>')
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        $(this)
        .css('display','none')
        $( "#pondababa-pad-defend")
            .css('display','block')
        $( "#defender-info")
            .html("<h1>Computer: Panda Baba</h1>")
        $( "#defender-info")
            .css('display','block')
        $( "#defender-health")
            .html('<h1>Health: 65</h1>')
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
    }
});

// on hover chance color of character text to red

$("#c3po").mouseenter(function(){
    $("#c3po-text").css("color", "red");
  });

  $("#c3po").mouseleave(function(){
    $("#c3po-text").css("color", "white");
  });

  $("#doikknats").mouseenter(function(){
    $("#doikknats-text").css("color", "red");
  });

  $("#doikknats").mouseleave(function(){
    $("#doikknats-text").css("color", "white");
  });

  $("#greedo").mouseenter(function(){
    $("#greedo-text").css("color", "red");
  });

  $("#greedo").mouseleave(function(){
    $("#greedo-text").css("color", "white");
  });

  $("#jawa").mouseenter(function(){
    $("#jawa-text").css("color", "red");
  });

  $("#jawa").mouseleave(function(){
    $("#jawa-text").css("color", "white");
  });

  $("#luke").mouseenter(function(){
    $("#luke-text").css("color", "red");
  });

  $("#luke").mouseleave(function(){
    $("#luke-text").css("color", "white");
  });

  $("#obiwan").mouseenter(function(){
    $("#obiwan-text").css("color", "red");
  });

  $("#obiwan").mouseleave(function(){
    $("#obiwan-text").css("color", "white");
  });

  $("#chewbacca").mouseenter(function(){
    $("#chewbacca-text").css("color", "red");
  });

  $("#chewbacca").mouseleave(function(){
    $("#chewbacca-text").css("color", "white");
  });

  $("#eg6").mouseenter(function(){
    $("#eg6-text").css("color", "red");
  });

  $("#eg6").mouseleave(function(){
    $("#eg6-text").css("color", "white");
  });

  $("#han").mouseenter(function(){
    $("#han-text").css("color", "red");
  });

  $("#han").mouseleave(function(){
    $("#han-text").css("color", "white");
  });

  $("#leia").mouseenter(function(){
    $("#leia-text").css("color", "red");
  });

  $("#leia").mouseleave(function(){
    $("#leia-text").css("color", "white");
  });

  $("#momawnadon").mouseenter(function(){
    $("#momawnadon-text").css("color", "red");
  });

  $("#momawnadon").mouseleave(function(){
    $("#momawnadon-text").css("color", "white");
  });

  $("#pondababa").mouseenter(function(){
    $("#pondababa-text").css("color", "red");
  });

  $("#pondababa").mouseleave(function(){
    $("#pondababa-text").css("color", "white");
  });



