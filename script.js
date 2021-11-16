
	const answerOneMessage = document.getElementById("answerOneMessage");
	const answerTwoMessage = document.getElementById("answerTwoMessage");
	const answerThreeMessage = document.getElementById("answerThreeMessage");
	let scoreDisp = document.getElementById("score");
	let gradeScore = 0;
	const resetBtn = document.getElementById("resetBtn");
	resetBtn.style.display = "none";
	const choices = document.getElementsByClassName("choice");

const checkAnswers = function(event) {
	let firstQuestion = document.quiz.questionOne.value;
	let secondQuestion = document.quiz.questionTwo.value;
	let thirdQuestion = document.quiz.questionThree.value;
	
	if(firstQuestion === "Ozzie Smith") {
		answerOneMessage.innerHTML = "Correct!"
		gradeScore++
	} else {
		answerOneMessage.innerHTML = "Wrong! The correct answer is Ozzie Smith"
	};

	if(secondQuestion === "1973") {
		answerTwoMessage.innerHTML = "Correct!"
		gradeScore++
	} else {
		answerTwoMessage.innerHTML = "Wrong! The correct answer is 1973."
	};

	if(thirdQuestion === "Strike Out") {
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

