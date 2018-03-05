function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
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
    var element = document.getElementById("progress");
    var currentQuestionNumber = quiz.questionIndex + 1;
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question ("What is a thin crispy and round food item with melted cheese between two tortillas called?", ["Sope", "Quesadilla", "Flauta", "Burrito"], "B");
    new Question ("Which of these dishes is often served for breakfast?", ["Enchiladas", "Huevos Rancheros", "Pozole", "Menudo"], "B");
    new Question ("Which of these is not one of the main ingredients in guacamole?", ["Avocado", "Tomatoes", "Onion", "Cheese"], "D");
    new Question ("This item consists of a filling (often meat, sometimes vegetables) inside a folded-in-half tortilla.", ["Vampiro", "Taco", "Carne", "Pozole"], "B");
    new Question ("What food item is not found on a Taco Bell menu?", ["Chimichanga", "Burrito", "Gordita", "Taco"], "A");
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();