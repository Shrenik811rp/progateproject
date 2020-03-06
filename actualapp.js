function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // shows question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // shows options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h2>Result</h2>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What tag is used to create a line break without space?", ["linebreak", "break","br", "lb"], "br"),

  new Question("Which tag makes the text visually bold?", ["b", "em","ol", "i"], "b"),
    

  new Question("What measurement is used for width ?", ["pixel", "percentage","kilometer", "meter"], "percentages"),
    

    new Question("What attribute is used to align text ?", ["direction", "align","alignment", "location"], "align"),
        

];


var quiz = new Quiz(questions);

populate();




