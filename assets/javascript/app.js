var panel = $('#quiz-area');


///////////////////////////////////////////////////////////////////////////////

//CLICK EVENTS

///////////////////////////////////////////////////////////////////////////////


$(document).on('click', '#start', function(e) {
    game.start();
});

$(document).on('click', '#done', function(e) {
    game.done();
});
///////////////////////////////////////////////////////////////////////////////


//Question set


///////////////////////////////////////////////////////////////////////////////

var questions = [{
    question: "1 . Who sold a defective monorail to Springfield?",
    answers: ["Lyle Lanley", "Lionel Hutz", "Mr. Burns", "Jimmy the Scumbag"],
    correctAnswer: "Lyle Lanley"
}, {
    question: "2 . What is the name of Springfield's rival town ?",
    answers: ["Ogdenville", "Shelbyville", "Dirksville", "Carlville"],
    correctAnswer: "Shelbyville"
}, {
    question: "3 .What did Shelbyville drink in celebration for banishing the lemon tree?",
    answers: ["Turnip Juice", "Carrot Juice", "Onion Juice", "Potato Juice"],
    correctAnswer: "Turnip Juice"
}, {
    question: "4 . Who shot Mr. Burns?",
    answers: ["Barney", "Moe", "Maggie", "Homer"],
    correctAnswer: "Maggie"
}, {
    question: "5 . What is the name of the street the Simpsons live on?",
    answers: ["Wintergreen Terrace", "Evergreen Terrace", "123 Fake Street", "Woodview Terrace"],
    correctAnswer: "Evergreen Terrace"
}, {
    question: "6 . How much money does Bart sells his soul to Milhouse for?",
    answers: ["$10", "$20", "$5", "$8"],
    correctAnswer: "$5"
}, {
    question: "7 . Where does Milhouse's dad work?",
    answers: ["The nuclear plant", "Moe's", "The Kwik-E-Mart", "The Cracker Factory"],
    correctAnswer: "The Cracker Factory"
}, {
    question: "8 . Who tells Ralph Wiggum to burn things?",
    answers: ["The Leprachaun", "The Elf", "Bart", "Chief Wiggum"],
    correctAnswer: "The Leprachaun"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function() {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < questions.length; i++) {
            panel.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }

        panel.append('<button id="done">Done</button>');
    },
    done: function() {


        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function() {

        clearInterval(timer);

        $('#subwrapper h2').remove();
        panel.html('<h2>All Done!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
    }

};
