
fired = 0;
playerChosen = false;
c3poAttackerHealth = 35;
doikknatsAttackerHealth = 40;
greedoAttackerHealth = 65;
jawaAttackerHealth = 35;
lukeAttackerHealth = 85;
obiwanAttackerHealth = 125;
chewbaccaAttackerHealth = 80;
eg6AttackerHealth = 30;
hanAttackerHealth = 65;
leiaAttackerHealth = 60;
momawnadonAttackerHealth = 32;
pondababaAttackerHealth = 35;

attacker = [];

c3poDefenderHealth = 30;
doikknatsDefenderHealth = 40;
greedoDefenderHealth = 65;
jawaDefenderHealth = 35;
lukeDefenderHealth = 85;
obiwanDefenderHealth = 100;
chewbaccaDefenderHealth = 80;
eg6DefenderHealth = 25;
hanDefenderHealth = 65;
leiaDefenderHealth = 60;
momawnadonDefenderHealth = 30;
pondababaDefenderHealth = 35;

c3poCounterAttack = 1;
doikknatsCounterAttack = 1;
greedoCounterAttack = 2;
jawaCounterAttack = 1;
lukeCounterAttack = 3;
obiwanCounterAttack = 5;
chewbaccaCounterAttack = 4;
eg6CounterAttack = 1;
hanCounterAttack = 3;
leiaCounterAttack = 2;
momawnadonCounterAttack = 1;
pondababaCounterAttack= 1;

defender = [];
defendersRemaining = 11;
defenderHealth = 0;

attackerPower = 0;

counterAttack = 0;

winAudio = 'assets/sounds/star-wars-theme-song.mp3';

c3poIntroAudio = 'assets/sounds/c3poIntroAudio.mp3';
c3poDeathAudio = 'assets/sounds/c3poDeathAudio.mp3';
c3poAttackAudio = 'assets/sounds/c3poAttackAudio.mp3';

doikknatsIntroAudio = 'assets/sounds/doikknatsIntroAudio.mp3';
doikknatsDeathAudio = 'assets/sounds/doikknatsDeathAudio.mp3';
doikknatsAttackAudio = 'assets/sounds/doikknatsAttackAudio.mp3';

greedoIntroAudio = 'assets/sounds/greedoIntroAudio.mp3';
greedoDeathAudio = 'assets/sounds/greedoDeathAudio.mp3';
greedoAttackAudio = 'assets/sounds/blasterAudio.mp3';

jawaIntroAudio = 'assets/sounds/jawaIntroAudio.mp3';
jawaDeathAudio = 'assets/sounds/jawaDeathAudio.mp3';
jawaAttackAudio = 'assets/sounds/jawaAttackAudio.mp3';

lukeIntroAudio = 'assets/sounds/lukeIntroAudio.mp3';
lukeDeathAudio = 'assets/sounds/lukeDeathAudio.mp3';
lukeAttackAudio = 'assets/sounds/lukeAttackAudio.mp3';

obiwanIntroAudio = 'assets/sounds/obiwanIntroAudio.mp3';
obiwanDeathAudio = 'assets/sounds/obiwanDeathAudio.mp3';
obiwanAttackAudio = 'assets/sounds/obiwanAttackAudio.mp3';

chewbaccaIntroAudio = 'assets/sounds/chewbaccaIntroAudio.mp3';
chewbaccaDeathAudio = 'assets/sounds/chewbaccaDeathAudio.mp3';
chewbaccaAttackAudio = 'assets/sounds/chewbaccaAttackAudio.mp3';

eg6IntroAudio = 'assets/sounds/eg6IntroAudio.mp3';
eg6DeathAudio = 'assets/sounds/eg6DeathAudio.mp3';
eg6AttackAudio = 'assets/sounds/eg6AttackAudio.mp3';

hanIntroAudio = 'assets/sounds/hanIntroAudio.mp3';
hanDeathAudio = 'assets/sounds/hanDeathAudio.mp3';
hanAttackAudio = 'assets/sounds/hanAttackAudio.wav';

leiaIntroAudio = 'assets/sounds/leiaIntroAudio.mp3';
leiaDeathAudio = 'assets/sounds/leiaDeathAudio.mp3';
leiaAttackAudio = 'assets/sounds/leiaAttackAudio.mp3';

momawnadonIntroAudio = 'assets/sounds/momawnadonIntroAudio.mp3';
momawnadonDeathAudio = 'assets/sounds/momawnadonDeathAudio.mp3';
momawnadonAttackAudio = 'assets/sounds/momawnadonAttackAudio.mp3';

pondababaIntroAudio = 'assets/sounds/pondababaIntroAudio.mp3';
pondababaDeathAudio = 'assets/sounds/pondababaDeathAudio.mp3';
pondababaAttackAudio = 'assets/sounds/pondababaAttackAudio.mp3';



function startGame() {
    document.getElementById("intro-text").style.display = "none";
    document.getElementById("instructions-text").style.display = "block";
    var audio1 = new Audio('assets/sounds/imperial_march.mp3');
                    audio1.play();
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
        attacker = "#c3po-pad-attack"
        attackerHealth = c3poAttackerHealth;
        introAudio = c3poIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = c3poAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html("<h1>Player: C3P0</h1>")
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
        console.log(attacker);
    } else {
        defender = "#c3po-pad-defend"
        defenderHealth = c3poDefenderHealth;
        counterAttack = c3poCounterAttack;
        deathAudio = c3poDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
            .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: C3P0</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
        console.log(defenderHealth);
        
    }
});

$( "#doikknats" ).click(function() {
    if (playerChosen === false) {
        attacker = "#doikknats-pad-attack"
        attackerHealth = doikknatsAttackerHealth;
        introAudio = doikknatsIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = doikknatsAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html("<h1>Player: Doikk Na'ts</h1>")
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
        console.log(attacker);
    } else {
        defender = "#doikknats-pad-defend"
        defenderHealth = doikknatsDefenderHealth;
        counterAttack = doikknatsCounterAttack;
        deathAudio = doikknatsDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Doikk Na'ts</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
        $( "#defender-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','none')
        $( "#attack-button")
            .css('display','block')
        console.log(defenderHealth);
        
    }
});

$( "#greedo" ).click(function() {
    if (playerChosen === false) {
        attacker = "#greedo-pad-attack"
        attackerHealth = greedoAttackerHealth;
        introAudio = greedoIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = greedoAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Greedo</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#greedo-pad-defend"
        defenderHealth = greedoDefenderHealth;
        counterAttack = greedoCounterAttack;
        deathAudio = greedoDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Greedo</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attacker = "#jawa-pad-attack"
        attackerHealth = jawaAttackerHealth;
        introAudio = jawaIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = jawaAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Jawa</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#jawa-pad-defend"
        defenderHealth = jawaDefenderHealth;
        counterAttack = jawaCounterAttack;
        deathAudio = jawaDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Jawa</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attacker = "#luke-pad-attack"
        attackerHealth = lukeAttackerHealth;
        introAudio = lukeIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = lukeAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Luke</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#luke-pad-defend"
        defenderHealth = lukeDefenderHealth;
        counterAttack = lukeCounterAttack;
        deathAudio = lukeDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Luke</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = obiwanAttackerHealth;
        attacker = "#obiwan-pad-attack"
        introAudio = obiwanIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = obiwanAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Obiwan</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#filler3")
            .css('display','block')
        playerChosen = true;
     } else {
        defender = "#obiwan-pad-defend"
        defenderHealth = obiwanDefenderHealth;
        counterAttack = obiwanCounterAttack;
        deathAudio = obiwanDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Obiwan</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = chewbaccaAttackerHealth;
        attacker = "#chewbacca-pad-attack"
        introAudio = chewbaccaIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = chewbaccaAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Chewbacca</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#filler1")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#chewbacca-pad-defend"
        defenderHealth = chewbaccaDefenderHealth;
        counterAttack = chewbaccaCounterAttack;
        deathAudio = chewbaccaDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name" )
            .html("<h1>Computer: Chewbacca</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = eg6AttackerHealth;
        attacker = "#eg6-pad-attack"
        introAudio = eg6IntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = eg6AttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: EG6</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#eg6-pad-defend"
        defenderHealth = eg6DefenderHealth;
        counterAttack = eg6CounterAttack;
        deathAudio = eg6DeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: EG6</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = hanAttackerHealth;
        attacker = "#han-pad-attack"
        introAudio = hanIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = hanAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Han</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#han-pad-defend"
        defenderHealth = hanDefenderHealth;
        counterAttack = hanCounterAttack;
        deathAudio = hanDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Han</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = leiaAttackerHealth;
        attacker = "#leia-pad-attack"
        introAudio = leiaIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = leiaAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Leia</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#leia-pad-defend"
        defenderHealth = leiaDefenderHealth;
        counterAttack = leiaCounterAttack;
        deathAudio = leiaDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Leia</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = momawnadonAttackerHealth;
        attacker = "#momawnadon-pad-attack"
        introAudio = momawnadonIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = momawnadonAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Momaw Nadon</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#momawnadon-pad-defend"
        defenderHealth = momawnadonDefenderHealth;
        counterAttack = momawnadonCounterAttack;
        deathAudio = momawnadonDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Momaw Nadon</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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
        attackerHealth = pondababaAttackerHealth;
        attacker = "#pondababa-pad-attack"
        introAudio = pondababaIntroAudio;
        var audio1 = new Audio( introAudio );
        audio1.play();
        attackAudio = pondababaAttackAudio;
        $(this)
            .css('display','none')
        $( attacker )
            .css('display','block')
        $( "#attacker-name")
            .html('<h1>Player: Ponda Baba</h1>')
        $( "#attacker-name")
            .css('display','block')
        $( "#attacker-health")
            .html("<h1>Health: " + attackerHealth + "</h1>")
        $( "#attacker-health")
            .css('display','block')
        $( "#attacker-power")
            .html("<h1>Attack Power: " + attackerPower + "</h1>")
        $( "#attacker-power")
            .css('display','block')
        $( "#choose-defender-text")
            .css('display','block')
        playerChosen = true;
    } else {
        defender = "#pondababa-pad-defend"
        defenderHealth = pondababaDefenderHealth;
        counterAttack = pondababaCounterAttack;
        deathAudio = pondababaDeathAudio;
        $( "#choose-next-defender-text" )
            .css('display','none')
        $(this)
        .css('display','none')
        $( defender )
            .css('display','block')
        $( "#defender-name")
            .html("<h1>Computer: Panda Baba</h1>")
        $( "#defender-name")
            .css('display','block')
        $( "#defender-health")
            .html("<h1>Health: " + defenderHealth + "</h1>")
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

  $( "#attack-button" ).click(function() {
    $( "#attacker-power").html("<h1>Attack Power: " + (attackerPower += 8) + "</h1>")
    $( "#defender-health").html("<h1>Health: " + (defenderHealth -= attackerPower) + "</h1>")
        .css('color','red')
        setTimeout("document.getElementById('defender-health').style.color='white';", 100);
    $( "#attacker-health")
        .html("<h1>Health: " + (attackerHealth -= counterAttack) + "</h1>")
        .css('color','red')
    setTimeout("document.getElementById('attacker-health').style.color='white';", 100);             
    var audio3 = new Audio( attackAudio );
        audio3.play();
    if (defenderHealth <= 0) {
        $( defender )
            .css('display','none')
        $( "#defender-name" )
            .css('display','none')
        $( "#defender-health" )
            .css('display','none')
        $( "#choose-next-defender-text" )
            .css('display','block')
        defendersRemaining--;
        console.log(defendersRemaining);
        var audio4 = new Audio( deathAudio );
        audio4.play();
    }

    if (defendersRemaining === 0) {
        $( attacker )
            .css('display','none')
        $( "#attacker-name")
            .css('display','none')
        $( "#attacker-health")
            .css('display','none')
        $( "#attacker-power")
            .css('display','none')
        $( "#attack-button" )
            .css('display','none')
        $( "#win-accouncement" )
            .css('display','block')
        $( "#choose-next-defender-text")
            .css('display','none')
        var audio5 = new Audio( winAudio );
            audio5.play();
    }

    if (attackerHealth <= 0) {
        $( attacker )
            .css('display','none')
        $( defender )
            .css('display','none')
        $( "#attacker-name")
            .css('display','none')
        $( "#attacker-health")
            .css('display','none')
        $( "#attacker-power")
            .css('display','none')
        $( "#death-notice")
            .css('display','block')
        $( "#attack-button" )
            .css('display','none')
    }
    });


