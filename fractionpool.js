function FractionPool()
{
	this.fractions_four = [ [ "1/4", "1/6", "1/3", "2/8" ], [ "1/15", "2/5", "1/5", "1/3" ], [ "1/18", "1/9", "1/3", "1/2" ], ["3/16","7/16","1/8","1/4"] ];
    this.fractions_three = [ [ "1/4", "2/3", "1/12" ], [ "1/2", "1/6", "1/3"], [ "1/6", "3/9", "1/2"], [ "1/4", "3/8", "3/16" ],  [ "1/2", "1/6", "1/3"], [ "1/2", "1/6", "1/3"], [ "1/6", "3/9", "1/2"] ];
    this.colorPool = [ "Blue", "Black", "Red", "Green"];
    
    this.getRandomQuestion = function(numberOfFractions)
    {
        var questionNumber = -1;
        var question = new Array();

        
        //Use Generator
        if(window._Options.UseGenerator)
        {
        	switch (window._Options.Level)
        	{
        		case 1: generateEasyFractions();break;
        		case 2: generateMediumFractions();break;
        		case 3: generateHardFractions();break;
        	}
        	
        	return generatedFractions;
        }
        else
        {
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
        }
    };
    
    function applyMultiplier(fractionArray)
    {
        var multiplier = 1;
        var denominator = 0;
        var numerator = 0;
        var fraction = new Array();

        for (var i = 0; i < fractionArray.length; i++)
        {
            multiplier = getRandomInt(1, window._Options.Level);

            fraction = fractionArray[i].split("/");

            numerator = (fraction[0]) * multiplier;
            denominator = (fraction[1]) * multiplier;

            fractionArray[i] = numerator + "/" + denominator;
        }

        return fractionArray;
    }
}
    
    /* Below is the random generator code written by another team
     * 
     * This code needs to be re-factored to implement loops and conditional logic. 
     */
    //Sets the value of the decimals


var easy = [4,6,8];
var medium = [6,8,9,10,16];
var hard = [8,9,10,12,14,15,16];

var generatedFractions = new Array();

    function generateThreeDecimals(denominator)
    {
    	num1 = Math.floor(((Math.random()) * (denominator-2))+1)
    	num2 = Math.floor(((Math.random()) * (denominator-1-num1))+1)
    	num3 = denominator - num1 - num2;
    	
    	dec1 = num1/denominator;
    	dec2 = num2/denominator;
    	dec3 = num3/denominator;
    }
    function generateFourDecimals(denominator)
    {
    	num1 = Math.floor(((Math.random()) * (denominator-3))+1)
    	num2 = Math.floor(((Math.random()) * (denominator-2-num1))+1)
    	num3 = Math.floor(((Math.random()) * (denominator-1-num1-num2))+1)
    	num4 = denominator - num1 - num2 - num3;
    	
    	
    	dec1 = num1/denominator;
    	dec2 = num2/denominator;
    	dec3 = num3/denominator;
    	dec4 = num4/denominator;
    }

    //This returns a array of fractions
    function generateEasyFractions()
    {
    	generatedFractions = new Array();
    	
    	generateThreeDecimals(randomNumberEasy());
    	
    	generatedFractions[0] = dec2frac(dec1);
    	generatedFractions[1] = dec2frac(dec2);
    	generatedFractions[2] = dec2frac(dec3);
    	
//    	document.getElementById("frac1").value = ;
//    	document.getElementById("frac2").value = dec2frac(dec2);
//    	document.getElementById("frac3").value = dec2frac(dec3);
//    	document.getElementById("frac4").value = "";
    }
    function generateMediumFractions()
    {
    	generatedFractions = new Array();
    	
    	generateThreeDecimals(randomNumberMedium());
    	
    	generatedFractions[0] = dec2frac(dec1);
    	generatedFractions[1] = dec2frac(dec2);
    	generatedFractions[2] = dec2frac(dec3);
    	
//    	document.getElementById("frac1").value = dec2frac(dec1);
//    	document.getElementById("frac2").value = dec2frac(dec2);
//    	document.getElementById("frac3").value = dec2frac(dec3);
//    	document.getElementById("frac4").value = "";
    }
    function generateHardFractions()
    {
    	generatedFractions = new Array();
    	
    	generateFourDecimals(randomNumberHard());
    	
    	generatedFractions[0] = dec2frac(dec1);
    	generatedFractions[1] = dec2frac(dec2);
    	generatedFractions[2] = dec2frac(dec3);
    	generatedFractions[3] = dec2frac(dec4);
    	
//    	document.getElementById("frac1").value = dec2frac(dec1);
//    	document.getElementById("frac2").value = dec2frac(dec2);
//    	document.getElementById("frac3").value = dec2frac(dec3);
//    	document.getElementById("frac4").value = dec2frac(dec4);
    }

    //These functions create the random numbers for the arrays.
    function randomNumberEasy()
    {
    	var randomNum;
    	
    	random=Math.floor(Math.random() * 3);
    	
    	return easy[random];
    }

    function randomNumberMedium()
    {
    	var randomNum;
    	
    	random=Math.floor(Math.random() * 5);
    	
    	return medium[random];
    }

    function randomNumberHard()
    {
    	var randomNum;
    	
    	random=Math.floor(Math.random() * 7);
    	
    	return hard[random];
    }

    
    
  