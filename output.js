function OutputQuestion(quiz){

	var gameContent = document.getElementById("gameContent");
	
	i = quiz.CurrentQuestion;
	
		var newQuestion = document.createElement("div");
		newQuestion.innerHTML += '<div id=\"Q' + (i +1) + '\"><h4>Question ' + (i+ 1) + '<div class=\"questionHolder\">';
		for(var j = 0; j < quiz.Questions[i].Fractions.length; j++)
		{
			newQuestion.innerHTML += "<span style=\"font-size: 40px; color: " + quiz.Questions[i].Fractions[j].Color + "\"> " + quiz.Questions[i].Fractions[j].GetAsString() + " </span> ";
		}
		var stringn = "document.getElementById(\"n\").value";
		var stringd = "document.getElementById(\"d\").value";
		newQuestion.innerHTML += '</div></h4></div>';
		newQuestion.innerHTML += '<div class=\"answerHolder\"><input type=\"text\" id=\"n' + (i+1) + '\" size=\"2\" placeholder=\"N\"/>&nbsp;/&nbsp;<input id=\"d' + (i+1) + '\" type=\"text\" size=\"2\" maxlength=\"2\" placeholder=\"D\" />&nbsp;';
		
		newQuestion.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Submit Answer\" id=\"' + (i+1) + '\" onclick=\"GetAnswer('+ (i+1 )+')\" /><img src=\"\" style=\"top: -34px; left: 150px; position:relative; visibility: hidden;\" id="image' + (i+1) + '" /><img src=\"assets/images/template/bigben.png\" id=\"timebonus' + (i+1) + '\" style=\"top: -34px; left: 150px; position:relative; visibility:hidden\" />';
		newQuestion.innerHTML += '<span style=\"font-weight: bold; left: -50px; position:relative; visibility:hidden\" id=\"answer' + (i+1) + '\">Q'+ (i+1) +' Answer: ' + quiz.Questions[i].Answer.GetAsStringNoMystery() + '</span>';
		newQuestion.innerHTML += '</div><br /><br />';
		
		gameContent.appendChild(newQuestion);
}

function DisplayScore(quiz)
{
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
}

function ShowCheck(id)
{
	document.getElementById('image' + id).src = 'assets/images/template/x.png';
	document.getElementById('image' + id).style.visibility='visible';
}

function ShowTimeBonus(id, bonus)
{
	document.getElementById('timebonus' + id).style.visibility='visible';
	document.getElementById('timebonus' + id).innerHTML = '<p>' +bonus + '</p>';
}

function DisplayScoreQuizButton()
{

}

function DisplayAnswer(id)
{
	document.getElementById('answer' + id).style.visibility='visible';
}
