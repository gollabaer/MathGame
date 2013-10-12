
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
	this.TimeScore = 0;
	this.CurrentQuestion = 0;
	
	this.SetUpQuiz();
}

Quiz.prototype.SetUpQuiz = function()
{
	var numberOfQuestions = getRandomInt(this.MinQuestions,this.MaxQuestions);

	for ( var i = 0; i < numberOfQuestions; i++) {
		
		var numberOfColors;
		
		if(window._Options.UseGenerator)
			{
	        	switch (window._Options.Level)
	        	{
	        		case 1: numberOfColors = 3;break;//Easy
	        		case 2: numberOfColors = 3;break;//Medium
	        		case 3: numberOfColors = 4;break;//Hard
	        	}
			}
		else
			{
				numberOfColors = getRandomInt(window._Options.MinColors, window._Options.MaxColors);//LevelBased
			}
		
		var question = new Question(numberOfColors);
		
		this.Questions[i] = question;
	}
};

Quiz.prototype.CalculateScore = function()
{
	//Calculate Score this.Score, this.Correct, this.Wrong
	alert("Score is calculated");
};

Quiz.prototype.ScoreTime = function()
{
	//Calculate Time Score this.TimeScore
	alert("Time is calculated");
};

