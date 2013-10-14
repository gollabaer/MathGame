var _Options = new Options();

function screenStart()
{
	
$("#TimerAmnt").hide();
$("#LevelSelect").hide();


		
	
}

jQuery(document).ready(function ()
    {
        $("#BasicMode").change(ModeChanged);
		$("#ChallengeMode").change(ModeChanged);
		//$("#timerON").change(timerChanged);
    })
	
	/*function timerChanged()
	{
		if($("#timerON").is(":checked") )
        {
            
			 $("#timer").show();
        }
	}*/

    function ModeChanged()
    {
        

        if($("#BasicMode").is(":checked") )
        {
            $("#LevelSelect").hide();
			 $("#BasicModeLevel").show();
        }
        else if ($("#ChallengeMode").is(":checked"))
        {
            $("#LevelSelect").show();
			 $("#BasicModeLevel").hide();
        }
    } 


function easyMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 1;
	alert (window._Options.Level);
	
	
	
	
	
	
	
	
	
}

function mediumMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 2;
	alert (window._Options.Level);
	
	
	
	
	
	
	
	
}

function hardMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 3;
	alert (window._Options.Level);
	
	
	
	
	
	
	
}

function timerOn()
{
	window._Options.Timer = true;
	$("#TimerAmnt").show();
	
	
}

function timerOff()
{
		window._Options.Timer = false;
		$("#TimerAmnt").hide();
	

}

function revealAnswerTrue()
{
	window._Options.RevealAnswers = true;
	alert (window._Options.RevealAnswers);
	
}

function revealAnswerFalse()
{
		window._Options.RevealAnswers = false;
	alert (window._Options.RevealAnswers);

}

function startGame()
{
	
if($("#timerON").is(":checked"))
{
	window._Options.TimerAmount = parseInt(document.getElementById('TimerAmount').value);
	
}



window._Options.MinimumQuestions = parseInt(document.getElementById('MinQ').value);




window._Options.MaximumQuestions = parseInt(document.getElementById('MaxQ').value);


if($("#ChallengeMode").is(":checked"))
{
	window._Options.Level = parseInt(document.getElementById('levelSelect').value);
}


$("#gameOptions").hide();

GameStart();


}