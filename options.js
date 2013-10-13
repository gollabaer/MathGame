function Options()
{
	this.Timer = true;
	
	this.MinimumQuestions = 3;
	this.MaximumQuestions = 3;
	this.MinColors = 3;
	this.MaxColors = 4;
	this.MinQuizzes = 1;
	this.MaxQuizzes = 3;
	this.TimerAmount = 100;
	this.RevealAnswers = false;
	
	//This will enable the random fraction generator
	//If Use Generator is true than level can be no greater than 3
	//If Use Generator is false level can be between 1-99
	this.UseGenerator = false;
	this.Level = 1;
	
};




