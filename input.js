function GetAnswer(index)
{
	//Find values for a given index
	var n = document.getElementById("n" + index).value;
	var d = document.getElementById("d" + index).value;
	
	//Turn into a fraction
	var answer = new Fraction();
	answer.numdenum(n, d);
	
	//Call Game Engine with answer
	ReceiveInput(index, answer);
};