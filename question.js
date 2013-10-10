
function Question(numberOfColors) {
	this.Fractions = new Array();
	this.Answer = new Fraction();
	this.NumberOfColors = 0;

	var answerNumber = getRandomInt(0, numberOfColors - 1);
	
	var fractionArray = window._FractionPool.getRandomQuestion(numberOfColors);

	for ( var i = 0; i < numberOfColors; i++) {
		var fraction = new Fraction();
		fraction.string(fractionArray[i]);

		if (i == answerNumber) 
		{
			fraction.IsMystery = true;
			this.Answer = fraction;
		}

		this.Fractions[i] = fraction;
	}
}
