var _StopWatch = new Timer();
var _Options = new Options();
var _FractionPool = new FractionPool();
var _Quiz;

function GameStart()
{	
	//Create the quiz for the user to take
	window._Quiz = new Quiz();
	
	
	//Start The Timer --To Do
	
	//Output first question of the quiz
	OutputQuestion(window._Quiz);
}

/*
 * id : This is row number of the div created by output.js
 * answer: This is the answer that the user entered, it is in a fraction object
 */
function ReceiveInput(id, answer)
{
	//Stop The Timer --To Do
	
	//If the answer is right
	if(answer.DecValue == window._Quiz.Questions[i].Answer.DecValue)
	{
		right(id);
		window._Quiz.Questions[id -1].Correct = true;
		
		//set time bonus in window._Quiz.Questions[id -1].TimeBonus --To Do
	}//Else the answer is wrong
	else
	{
		wrong(id);			
		window._Quiz.Questions[id -1].Correct = false;
		
		//set time bonus in window._Quiz.Questions[id -1].TimeBonus = 0 because no time bonus if answer is wrong --To Do
	}
	
	//Disable Last Question
	DisableQuestion(id);

	//Show Answer if needed
	if(window._Options.RevealAnswers)
	{
		DisplayAnswer(id);
	}
	
	//Increment Question Number
	window._Quiz.CurrentQuestion = (window._Quiz.CurrentQuestion + 1);
	
	
	//If the last question display the score quiz button
	if(window._Quiz.CurrentQuestion == window._Quiz.Questions.length)
	{
		DisplayScoreQuizButton();
		
		//Debug This call will actually be made from the Score Quiz button onClick Handler
		alert("Score Test Button Simulation Click")
		CalculateScore(window._Quiz);
	}
	//Else it is not the last question
	{
		//Start The Timer --To Do
		
		//Output Next Question
		OutputQuestion(window._Quiz);	
		
		//Set Focus to New question
		SetFocus(id + 1);
		
	}
}

//Post Processing for right answers
function right(id)
{
	ShowStar(id);
}

//Post processing for wrong answers
function wrong(id)
{
 	ShowCheck(id);
}

function CalculateScore(quiz)
{
	//Calculate the quiz score
	quiz.CalculateScore();
	//Calculate the time Bonus
	quiz.ScoreTime();
	//Output Score to Game div
	DisplayScore(quiz);
}



