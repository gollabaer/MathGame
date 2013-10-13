
function Question(numberOfColors) 
{
	this.Fractions = new Array();
	this.Answer = new Fraction();
	this.NumberOfColors = 0;
	this.Correct = false;
	this.TimeBonus = 0.00;

	var answerNumber = getRandomInt(0, numberOfColors - 1);
	
	var fractionArray = window._FractionPool.getRandomQuestion(numberOfColors);

	for ( var i = 0; i < numberOfColors; i++) 
	{
		var fraction = new Fraction();
		fraction.string(fractionArray[i]);
		
		//Set The Color of the fraction
		fraction.Color = window._FractionPool.colorPool[i];

		//Set the Mystery Question
		if (i == answerNumber) 
		{
			fraction.IsMystery = true;
			this.Answer = fraction;
		}

		this.Fractions[i] = fraction;
	}

	//Fractions are shuffled so that the colors do not all run in rows
	shuffle(this.Fractions);
};