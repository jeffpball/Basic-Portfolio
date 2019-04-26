$.fn.trivia = function() {
    var trivia = this;
    trivia.userPick = null;
    trivia.answers = {
        correct: 0,
        incorrect: 0
    };
    trivia.images = null;
    trivia.count = 30;
    trivia.current = 0;
    trivia.questions = [{
        question: "Throughout most of Roman history, what percent of the population were plebians?",
        choices: ["42%", "90%", "55%", "36%"],
        correct: 1
    }, {
        question: "Where were gladiator fights held?",
        choices: ["The Podiam", "The Prosetheum", "The Colosseum", "The Parthanon"],
        correct: 2

    }, {
        question: "How many consuls were there at a time?",
        choices: ["1", "2", "3", "4"],
        correct: 1

    }, {
        question: "How old was Caesar when he became consul?",
        choices: ["13", "20", "41", "32", "88"],
        correct: 2

    }, {
        question: "Which of these lands were not conquered by the Romans?",
        choices: ["Persia", "Spain", "Greece", "France"],
        correct: 0

    }, {
        question: "Between 509 B.C. and 27 B.C., what form of government did Rome have?",
        choices: ["Oligarchy", "Democracy", "Republic", "Monarchy"],
        correct: 3

    }, {
        question: "Emperor Constantine was the first emperor that was ______?",
        choices: ["Hindu", "Christian", "Muslim", "Jewish"],
        correct: 1

    }, {
        question: "How many hills protected Rome from the river?",
        choices: ["5", "6", "7", "8"],
        correct: 2
    }];
    trivia.ask = function() {
        if (trivia.questions[trivia.current]) {
            $("#timer").html("Time: " + trivia.count + " sec");
            $("#question_div").html(trivia.questions[trivia.current].question);
            var choicesArr = trivia.questions[trivia.current].choices;
            var buttonsArr = [];

            for (var i = 0; i < choicesArr.length; i++) {
                var button = $('<button>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('#choices_div').append(button);
            }
            window.triviaCounter = setInterval(trivia.timer, 1000);
        } else {
            // $('#unanswered').append($('<div />', {
            //     text: 'Unanswered: ' + (
            //         trivia.questions.length - (trivia.answers.correct + trivia.answers.incorrect)),
            //     class: 'result'
            // }));
            $('#start_button').text('Restart').appendTo('body').show();
        }
    };
    trivia.timer = function() {
        trivia.count--;
        index = trivia.questions[trivia.current].correct,
        correct = trivia.questions[trivia.current].choices[index];
        if (trivia.count <= 0) {
            $('#time_is_up').text("Time is up! The correct answer was: " + correct)
            setTimeout(function() {
                trivia.nextQ();
            });
            trivia.answer(false);
        } else {
            $("#timer").html("Time: " + "00:" +trivia.count + " sec");
        }
    };
    trivia.nextQ = function() {
        trivia.current++;
        clearInterval(window.triviaCounter);
        trivia.count = 30;
        $('#timer').html("");
        setTimeout(function() {
            trivia.cleanUp();
            trivia.ask();
        }, 5000)
    };

    trivia.cleanUp = function() {
        $('div[id]').each(function(item) {
            $(this).html('');
        });
        $('.correct').html('Correct answers: ' + trivia.answers.correct);
        $('.incorrect').html('Incorrect answers: ' + trivia.answers.incorrect);
    };
    trivia.answer = function(correct) {
        var string = correct ? 'correct' : 'incorrect';
        trivia.answers[string]++;
        $('.' + string).html(string + ' answers: ' + trivia.answers[string]);
    };
    return trivia;
};
var Trivia;

$("#start_button").click(function() {
    $("#intro-image").css("display", "none");
    $(this).hide();
    $('.result').remove();
    $('div').html('');
    Trivia = new $(window).trivia();
    Trivia.ask();
});

$('#choices_div').on('click', 'button', function(e) {
    var userPick = $(this).data("id"),
    trivia = Trivia || $(window).trivia(),
        index = trivia.questions[trivia.current].correct,
        correct = trivia.questions[trivia.current].choices[index];

    if (userPick !== index) {
        $('#choices_div').text("Wrong Answer! The correct answer was: " + correct);
        trivia.answer(false);
    } else {
        $('#choices_div').text("Correct!!! The correct answer was: " + correct);
        trivia.answer(true);
    }
    trivia.nextQ();
});