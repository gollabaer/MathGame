
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
	
	//How much is the remaining time "worth"
	this.TimePercentage = 0.4;
	//How much time has the user relative to the total time to answer the question
	this.neededPercentage = 0.5;
	
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

Quiz.prototype.CalculateScore = function(timed, timeAmount)
{
//	Counting Wrong and Right Answers
	for (var i = 0; i < this.Questions.length; i++) {
		if(this.Questions[i].Correct){
			this.Correct += 1;
			}
		else{
			this.Wrong += 1;
			}
		}
	
	var accuracy = this.Correct / this.Questions.length;
	
	// remaining time / (Total given time * % )
	var speed = this.TimeScore / 
					((timeAmount * this.Questions.length) * this.neededPercentage);
		
// 	Claculate Score as %
	if(timed){
		this.Score = this.TimePercentage * speed + (1 - this.TimePercentage) * accuracy;
		}
	else{
		this.Score = accuracy;
		}
			
	this.Score = Math.round(this.Score * 100);// * 100;

	//Calculate Score this.Score, this.Correct, this.Wrong
	alert("Score is calculated: " + this.Score);
};

Quiz.prototype.ScoreTime = function()
{
	var totalTime = 0;
	for (var i = 0; i < this.Questions.length; i++) {
		if(this.Questions[i].Correct){
		totalTime += this.Questions[i].TimeBonus;
		}
	}
	this.TimeScore = totalTime;
	//Calculate Time Score this.TimeScore
	alert("Time is calculated: "+ this.TimeScore);
};
