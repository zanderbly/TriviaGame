function populate() {
	if(quiz.isEnded()) {
		//showScores();

	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
	}
}


var questions = [
	new Question("What is a thin, crispy, and round food item with melted cheese between two tortillas called?", ["Sope", "Quesadilla", "Flauta", "Burrito"], "B");
	new Question("Which of these dishes is often served for breakfast?", ["Enchiladas", "Huevos Rancheros", "Pozole", "Menudo"], "B");
	new Question("Which of these is not one of the main ingredients in guacamole?", ["Avocado", "Tomatoes", "Onion", "Cheese"], "D");
	new Question("This item consists of a filling (often meat, sometimes vegetables) inside a folded-in-half tortilla.", ["Vampiro", "Taco", "Carne", "Pozole"], "B");
	new Question("What food item is not found on a Taco Bell menu?", ["Chimichanga", "Burrito", "Gordita", "Taco"], "A");
];

var quiz = new Quiz(questions);

populate();