
function Quiz()
{
	this.Questions = new Array();
	
	this.MinQuestions = window._Options.MinimumQuestions;	
	this.MaxQuestions = window._Options.MaximumQuestions;
	
	this.MinColors = window._Options.MinColors;	
	this.MaxColors = window._Options.MaxColors;

	this.Correct = 0;
	this.Wrong = 0;
	this.Score = 0;
	this.CurrentQuestion = 0;
	
	this.SetUpQuiz();
}

Quiz.prototype.SetUpQuiz = function()
{
	var numberOfQuestions = getRandomInt(this.MinQuestions,this.MaxQuestions);

	for ( var i = 0; i < numberOfQuestions; i++) {
		
		var numberOfColors = getRandomInt(window._Options.MinColors, window._Options.MaxColors);
		
		var question = new Question(numberOfColors);
		
		this.Questions[i] = question;
	}
};
