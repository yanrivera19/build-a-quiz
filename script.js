/*
Build a Quiz:

Step 1: Define a variable called answerOneMessage with the selection of a <p>
element that will display a message regarding the user's answer to the first question.
Step 2: Define a variable called answerTwoMessage with the selection of a <p>
element that will display a message regarding the user's answer to the second question.
Step 3: Define a variable called answerThreeMessage with the selection of a <p>
element that will display a message regarding the user's answer to the third question.
Step 4: Define a variable called scoreDisp with the selection of a <p> element that will
display the test score.
Step 5: Define a variable called gradeScore with an initial value of 0. This will contain
the user's test score.
Step 6: Define a variable called resetBtn with the selection of a <button> element. This button
will be hidden at first.
Step 7: Define a variable called choices with the selection of all the choices/possible-answers.
Step 8: Create a function expression called checkAnswers that will take in an event as its parameter.
On our HTML page, we add an onsubmit attribute to the form element so that it executes this function 
whenever a submit is made.
Step 9: Define a variable called firstAnswer with the selection of the first question's value/user's
answer.
Step 10: Define a variable called secondAnswer with the selection of the second question's value/user's
answer.
Step 11: Define a variable called thirdAnswer with the selection of the third question's value/user's
answer.
Step 12: With several if statements check if the user's answers are equal to the correct answer.
If they are, display a message indicating that the answer is correct and increase the gradeScore by one.
If it isn't, display a message indicating that the answer is incorrect. 
Step 13: Display the user's final score.
Step 14: Use the preventDefault method on the event parameter to prevent the form to be submitted.
This will be used so that the random number doesn't change with every submission and the messages 
displayed on the page can be visible after every submission. 
Step 15: Call the resetButton function.
Step 16: Create a function called resetButton. This function will display the <button> element that was hidden
at first, which is the Try Again button. Will also add an addEventListener method to the reset button (resetBtn) with which
a function called resetQuiz will be executed whenever the button is clicked. Will disable the submit button and the
choices of our questions so that we cannot change our answers once we click the submit button.
Step 17: Create a function called resetQuiz. This function will reset the quiz to its original condition.
This is done by clearing out all the displayed messages, hiding the Try again button (resetBtn), reseting the gradeScore
variable to its initial value of 0, and re-enabling the submit button and the choices.
*/

const answerOneMessage = document.getElementById("answerOneMessage");
const answerTwoMessage = document.getElementById("answerTwoMessage");
const answerThreeMessage = document.getElementById("answerThreeMessage");
const scoreDisp = document.getElementById("score");
let gradeScore = 0;
const resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "none";
const choices = document.getElementsByClassName("choice");

const checkAnswers = function(event) {
	let firstAnswer = document.quiz.questionOne.value;
	let secondAnswer = document.quiz.questionTwo.value;
	let thirdAnswer = document.quiz.questionThree.value;
	
	if(firstAnswer === "Ozzie Smith") {
		answerOneMessage.innerHTML = "Correct!"
		gradeScore++
	} else {
		answerOneMessage.innerHTML = "Wrong! The correct answer is Ozzie Smith"
	};

	if(secondAnswer === "1973") {
		answerTwoMessage.innerHTML = "Correct!"
		gradeScore++
	} else {
		answerTwoMessage.innerHTML = "Wrong! The correct answer is 1973."
	};

	if(thirdAnswer === "Strike Out") {
		answerThreeMessage.innerHTML = "Correct!"
		gradeScore++
	} else {
		answerThreeMessage.innerHTML = "Wrong! The correct answer is Strike Out."
	};

	scoreDisp.innerHTML = "Your score is: " + gradeScore + "/3" + " " + ((gradeScore / 3) * 100).toFixed(2) + "%";
	event.preventDefault();	
	resetButton();
};

function resetButton() {
	resetBtn.style.display = "inline-block";	
  	resetBtn.addEventListener("click", resetQuiz);
  	for(i = 0; i < choices.length; i++) {
	choices[i].disabled = true;
	}
  	document.getElementById("subBtn").disabled = true;  	
};

function resetQuiz() {
	resetBtn.style.display = "none";
	answerOneMessage.innerHTML = "";
	answerTwoMessage.innerHTML = "";
	answerThreeMessage.innerHTML = "";
	scoreDisp.innerHTML = "";
	gradeScore = 0;
	for(i = 0; i < choices.length; i++) {
	choices[i].disabled = false;
	choices[i].checked = false;
	}
	document.getElementById("subBtn").disabled = false;	
};

