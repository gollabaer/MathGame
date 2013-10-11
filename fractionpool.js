function FractionPool()
{
	this.fractions_four = [ [ "1/4", "1/6", "1/3", "2/8" ], [ "1/15", "2/5", "1/5", "1/3" ], [ "1/18", "1/9", "1/3", "1/2" ], ["3/16","7/16","1/8","1/4"] ];
    this.fractions_three = [ [ "1/4", "2/3", "1/12" ], [ "1/2", "1/6", "1/3"], [ "1/12", "1/12", "5/6"], [ "1/4", "3/8", "6/16" ] ];
    this.colorPool = [ "Blue", "Black", "Red", "Green"];
    
    this.getRandomQuestion = function(numberOfFractions)
    {
        var questionNumber = -1;
        var question = new Array();

        switch(numberOfFractions)
        {
            case 3: 
                questionNumber = getRandomInt(0, this.fractions_three.length - 1);
                
                for (var i = 0; i < this.fractions_three[0].length; i++)
                {
                    question[i] = this.fractions_three[questionNumber][i];
                }
                break;
            case 4:
                questionNumber = getRandomInt(0, this.fractions_four.length - 1);

                for (var i = 0; i < this.fractions_four[0].length; i++)
                {
                    question[i] = this.fractions_four[questionNumber][i];

                }
                break;
            default: 
                return;
        }

        question = shuffle(question);

        return applyMultiplier(question);
    };
    
	function applyMultiplier(question)
    {
        var multiplier = 1;
        var denominator = 0;
        var numerator = 0;
        var fraction = new Array();

        for (var i = 0; i < question.length; i++)
        {
            multiplier = getRandomInt(1, window._Options.Level);

            fraction = question[i].split("/");

            numerator = (fraction[0]) * multiplier;
            denominator = (fraction[1]) * multiplier;

            question[i] = numerator + "/" + denominator;
        }

        return question;
    }
	
	
}