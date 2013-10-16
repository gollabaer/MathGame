var _Options = new Options();

function screenStart()
{
	$("#aboutGame").hide();
    $("#TimerAmnt").hide();
    $("#LevelSelect").hide();
}

jQuery(document).ready(function ()
    {
        $("#BasicMode").change(ModeChanged);
		$("#ChallengeMode").change(ModeChanged);
    })


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
}

function mediumMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 2;
}

function hardMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 3;
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
}

function revealAnswerFalse()
{
	window._Options.RevealAnswers = false;
}

$(function() {
    $( "#slider-range-min" ).slider({
      range: "max",
      min: 5,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#minamount" ).val( ui.value );
      }
    });
    $( "#minamount" ).val( $( "#slider-range-min" ).slider( "value" ) );
  });
  
  $(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 10,
      max: 20,
      value: 10,
      slide: function( event, ui ) {
        $( "#maxamount" ).val( ui.value );
      }
    });
    $( "#maxamount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  });

function startGame()
{
    if($("#timerON").is(":checked"))
    {
        window._Options.Timer = true;
        window._Options.TimerAmount = parseInt(document.getElementById('TimerAmount').value);

        //Final Check on timer value
        if (isNaN(window._Options.TimerAmount))
        {
            window._Options.TimerAmount = 30;
        }
    }

    window._Options.MinimumQuestions = parseInt(document.getElementById('minamount').value);
    window._Options.MaximumQuestions = parseInt(document.getElementById('maxamount').value);

    if($("#ChallengeMode").is(":checked"))
    {
        window._Options.Level = parseInt(document.getElementById('levelSelect').value);

        //Final Check on timer value
        if (isNaN(window._Options.Level))
        {
            window._Options.Level = 2;
        }
    }


    $("#gameOptions").hide();
    $("#aboutGame").show();
    $("#gameOpt").hide();



    GameStart();


}