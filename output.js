//Accept an array of fraction objects from Question
//Within the array, loop through the fractions in the question and output them as a list

/*<li id="Q1"><h4><div class="questionHolder">1/4 Red, 1/8 Blue, 3/8 Green, ?/? Black</div></h4></li>
 <div class="answerHolder"><input type="text" name="numerator" size="2" placeholder="N"/>&nbsp;/&nbsp;<input name="denomenator" type="text"  size="2" maxlength="2" placeholder="D" />&nbsp;
  <input type="button" name="submit" value="Submit Answer"/><img src="assets\images\template\check.png" class="pic" /><img src="assets\images\template\x.png" class="pic" /></div><br /><br />*/

/*function OutputAllQuestions(quiz){

	var gameContent = document.getElementById("gameContent");
	
   //quiz.Questions[1].Fractions[1];
	
	
	
//	 for (var i = 0; i < quiz.Questions.length; i++ ) 
//	   {
//	   	var innerHtml = "";
//	       var item = document.createElement("li");
//	       
//	       for(var i2 = 0; i2 < quiz.Questions[i].Fractions.length; i2++)
//	       	{
//	       	 innerHtml = innerHtml + quiz.Questions[i].Fractions[i2].ToString();
//	       	}
//	      
//	       item.innerHTML = innerHtml;
//	       
//	       items.appendChild(item);
//	   }
//	 
	//Questions
	for(var i=0; i < quiz.Questions.length ; i++)
	{
		var newQuestion = document.createElement("div");
		newQuestion.innerHTML += '<li id=\"Q' + (i +1) + '\"><h4><div class=\"questionHolder\">';
		//Fraction Number
		for(var j = 0; j < quiz.Questions[i].Fractions.length; j++)
		{
			newQuestion.innerHTML += "(" + quiz.Questions[i].Fractions[j].GetAsString() + ") ";
		}
		var stringn = "document.getElementById(\"n\").value";
		var stringd = "document.getElementById(\"d\").value";
		newQuestion.innerHTML += '</div></h4></li>';
		newQuestion.innerHTML += '<div class=\"answerHolder\"><input type=\"text\" id=\"n' + (i+1) + '\" size=\"2\" placeholder=\"N\"/>&nbsp;/&nbsp;<input id=\"d' + (i+1) + '\" type=\"text\" size=\"2\" maxlength=\"2\" placeholder=\"D\" />&nbsp;';
		newQuestion.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Submit Answer\" id=\"' + (i+1) + '\" onclick=\"GetAnswer('+ (i+1 )+')\" />';
		newQuestion.innerHTML += '</div><br /><br />';
		
		
		//alert(newQuestion.innerHTML);
		//gameContent.getElementsByClassName("answerHolder")[i+1]
		//document.getElementById("n(i+1)").value;
		//document.getElementById("n(i+1)").value;
		
		gameContent.appendChild(newQuestion);

	}
}*/


function OutputQuestion(quiz){

	var gameContent = document.getElementById("gameContent");
	
	//Questions
//	for(var i=0; i < quiz.Questions.length ; i++)
//	{
	
	
	i = quiz.CurrentQuestion;
	
	
		var newQuestion = document.createElement("div");
		newQuestion.innerHTML += '<div id=\"Q' + (i +1) + '\"><h4>Question ' + (i+ 1) + '<div class=\"questionHolder\">';
		//Fraction Number
		for(var j = 0; j < quiz.Questions[i].Fractions.length; j++)
		{
			newQuestion.innerHTML += "(" + quiz.Questions[i].Fractions[j].GetAsString() + ") ";
		}
		var stringn = "document.getElementById(\"n\").value";
		var stringd = "document.getElementById(\"d\").value";
		newQuestion.innerHTML += '</div></h4></div>';
		newQuestion.innerHTML += '<div class=\"answerHolder\"><input type=\"text\" id=\"n' + (i+1) + '\" size=\"2\" placeholder=\"N\"/>&nbsp;/&nbsp;<input id=\"d' + (i+1) + '\" type=\"text\" size=\"2\" maxlength=\"2\" placeholder=\"D\" />&nbsp;';
		
		
		newQuestion.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Submit Answer\" id=\"' + (i+1) + '\" onclick=\"GetAnswer('+ (i+1 )+')\" />';
		newQuestion.innerHTML += '<img src=\"assets/images/template/star.png\" id=\"star' + (i+1) + '\" style=\"visibility:hidden\"></img>';
        newQuestion.innerHTML += '<img src=\"assets/images/template/x.png\" id=\"X' + (i+1) + '\" style=\"visibility:hidden\"></img>';
		newQuestion.innerHTML += '</div><br /><br />';
		
		
		
		gameContent.appendChild(newQuestion);

//	}
}


function DisableQuestion(index)
{
	$('#' + index).hide();;//   .attr('visible', false);
}