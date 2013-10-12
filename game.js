var _StopWatch = new Timer();
var _Options = new Options();
var _FractionPool = new FractionPool();
var _Quiz;

function GameStart()
{	
	//Quiz Test
	window._Quiz = new Quiz();
	
	//OutputAllQuestions(window._Quiz);
	OutputQuestion(window._Quiz);
}

/*
 * id : This is row number of the div created by output.js
 * answer: This is the answer that the user entered, it is in a fraction object
 */
function right(id){
	 document.getElementById('star' + id ).style.visibility='visible';
	 $('#star').show();
	 //alert ("correct!");	
}
function wrong(id){
	 document.getElementById('X' + id).style.visibility='visible';
	 //alert ("incorrect Answer!");
	 	
}

/*
 * id : This is row number of the div created by output.js
 * answer: This is the answer that the user entered, it is in a fraction object
 */
function ReceiveInput(id, answer)
{
	//Access to the Quiz
	//window._Quiz.Questions[i].Answer
	
	var correct = false;
	
	if(answer.DecValue 
		== window._Quiz.Questions[i].Answer.DecValue){
			correct = true;
		right(id);
		
		
	}else{
		wrong(id);
				
	}
	//alert(id + " " + answer.GetAsString());
	
	
	DisableQuestion(id);
	
	window._Quiz.CurrentQuestion = (window._Quiz.CurrentQuestion + 1);
	
	
	OutputQuestion(window._Quiz);


	
}