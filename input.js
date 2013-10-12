function GetAnswer(index)
{
	//Find values for a given index
	var n = document.getElementById("n" + index).value;
	var d = document.getElementById("d" + index).value;
	
	//Validate n & d 1-10000
	
	// if convert to fraction and and call receive Input
	
		//Turn into a fraction
		var answer = new Fraction();
		answer.numdenum(n, d);
		
		//Call Game Engine with answer
		ReceiveInput(index, answer);
	
	
	//else 
		//return
	
	
};