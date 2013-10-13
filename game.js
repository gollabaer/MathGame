var _StopWatch = new Timer();
var _Options = new Options();
var _FractionPool = new FractionPool();
var _Quiz;


function GameStart()
{	
	alert(window.tim)
	//Create the quiz for the user to take
	window._Quiz = new Quiz();
	
	if(window._Options.Timer)
	{
		_StopWatch.start();
		
	}
	//alert("GameSTART with timer: " + window._Options.Timer);
	//Output first question of the quiz
	OutputQuestion(window._Quiz);
}

/*
 * id : This is row number of the div created by output.js
 * answer: This is the answer that the user entered, it is in a fraction object
 */
function ReceiveInput(id, answer)
{
	if(window._Options.Timer)
	{
		_StopWatch.stop();
		var timediff = window._Options.TimerAmount - _StopWatch.duration();
		if(timediff > 0)
		window._Quiz.Questions[id-1].TimeBonus = timediff;
	}
	
	//If the answer is right
	if(answer.DecValue == window._Quiz.Questions[i].Answer.DecValue)
	{		
		right(id);
	}//Else the answer is wrong
	else
	{		
		wrong(id);	
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
		if(window._Options.Timer)
		{
			_StopWatch.start();
		}
		
		//Output Next Question
		OutputQuestion(window._Quiz);	
		
		//Set Focus to New question
		SetFocus(id + 1);
	}
}

//Post Processing for right answers
function right(id)
{
	window._Quiz.Questions[id -1].Correct = true;
	
	ShowStar(id);
	
	if(window._Options.Timer)
	{
		//set time bonus in window._Quiz.Questions[id -1].TimeBonus --To Do
		
		if(window._Quiz.Questions[id -1].TimeBonus > 0)
		{
			ShowTimeBonus(id, window._Quiz.Questions[id -1].TimeBonus);
		}
	}
	
}

//Post processing for wrong answers
function wrong(id)
{
	window._Quiz.Questions[id -1].Correct = false;
	
 	ShowCheck(id);
 	
 	if(window._Options.Timer)
	{
		//set time bonus in window._Quiz.Questions[id -1].TimeBonus = 0 because no time bonus if answer is wrong --To Do
	}
}

function CalculateScore(quiz)
{

	
	//Calculate the time Bonus
	if(window._Options.Timer)
	{
		quiz.ScoreTime();
	}

	//Calculate the quiz score
	quiz.CalculateScore(window._Options.Timer,window._Options.TimerAmount );
	
	
	//Output Score to Game div
	DisplayScore(quiz);
}



