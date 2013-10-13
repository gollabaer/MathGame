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
			//newQuestion.innerHTML += "<span style=\"font-size: 40px;\" class=\"fractionColor" + (j+1) + "\"> " + quiz.Questions[i].Fractions[j].GetAsString() + " </span> ";
			newQuestion.innerHTML += "<span style=\"font-size: 40px; color: " + quiz.Questions[i].Fractions[j].Color + "\"> " + quiz.Questions[i].Fractions[j].GetAsString() + " </span> ";
			
		}
		var stringn = "document.getElementById(\"n\").value";
		var stringd = "document.getElementById(\"d\").value";
		newQuestion.innerHTML += '</div></h4></div>';
		newQuestion.innerHTML += '<div class=\"answerHolder\"><input type=\"text\" id=\"n' + (i+1) + '\" size=\"2\" placeholder=\"N\"/>&nbsp;/&nbsp;<input id=\"d' + (i+1) + '\" type=\"text\" size=\"2\" maxlength=\"2\" placeholder=\"D\" />&nbsp;';
		
		
		newQuestion.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Submit Answer\" id=\"' + (i+1) + '\" onclick=\"GetAnswer('+ (i+1 )+')\" /><img src=\"\" style=\"top: -34px; left: 120px; position:relative; visibility: hidden;\" id="image' + (i+1) + '" /><img src=\"assets/images/template/bigben.png\" id=\"timebonus' + (i+1) + '\" style=\"top: -34px; left: 120px; position:relative; visibility:hidden\" />';
		newQuestion.innerHTML += '<span style=\"font-weight: bold; left: -50px; position:relative; visibility:hidden\" id=\"answer' + (i+1) + '\">Q'+ (i+1) +' Answer: ' + quiz.Questions[i].Answer.GetAsStringNoMystery() + '</span>';
		/*newQuestion.innerHTML += '<img src=\"assets/images/template/star.png\" id=\"star' + (i+1) + '\" style=\"visibility:hidden\"></img>';
		newQuestion.innerHTML += '<img src=\"assets/images/template/bigben.png\" id=\"timebonus' + (i+1) + '\" style=\"visibility:hidden\"></img>';
		newQuestion.innerHTML += '<img src=\"assets/images/template/x.png\" id=\"X' + (i+1) + '\" style=\"visibility:hidden\"></img>';*/
		newQuestion.innerHTML += '</div><br /><br />';
		
		
		gameContent.appendChild(newQuestion);

//	}
}

function DisplayScore(quiz)
{
//Display the score to the game content div	
	alert("Score Should be displayed to html")
	var gameContent = document.getElementById("gameContent");
	var scoreDiv = document.createElement("div");
	scoreDiv.innerHTML += "<span style=\"font-size: 32px; color: #2856aa; \">Correct: </span><span style=\"font-size: 32px; \">" + quiz.Correct + "</span><br />";
	scoreDiv.innerHTML += "<span style=\"font-size: 32px; color: #2856aa; \">Wrong: </span><span style=\"font-size: 32px; \">" + quiz.Wrong + "</span><br />";
	scoreDiv.innerHTML += "<span style=\"font-size: 32px; color: #2856aa; \">Time Bonus: </span><span style=\"font-size: 32px; \">" + quiz.TimeScore + "</span><br />";
	scoreDiv.innerHTML += "<span style=\"font-size: 32px; color: #2856aa; \">Score: </span><span style=\"font-size: 32px; \">" + quiz.Score + "</span>";
	
	gameContent.appendChild(scoreDiv);
	
}

function DisableQuestion(index)
{
	$('#' + index).hide();
}

function ShowStar(id)
{
	document.getElementById('image' + id).src = 'assets/images/template/star.png';
	document.getElementById('image' + id).style.visibility='visible';
	//document.getElementById('star' + id).style.visibility='visible';
}

function ShowCheck(id)
{
	document.getElementById('image' + id).src = 'assets/images/template/x.png';
	document.getElementById('image' + id).style.visibility='visible';
	//document.getElementById('X' + id).style.visibility='visible';
}

function ShowTimeBonus(id, bonus)
{
	document.getElementById('timebonus' + id).style.visibility='visible';
	document.getElementById('timebonus' + id).innerHTML = '<p>' +bonus + '</p>';
}

function DisplayScoreQuizButton()
{
	//Logic to make the display score quiz button appear
	alert("Score Quiz Button Should Appear");
}

function DisplayAnswer(id)
{
	document.getElementById('answer' + id).style.visibility='visible';
}
