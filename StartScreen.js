function screenStart()
{
	
	var chooseMode = document.createElement("div");
	
	chooseMode.innerHTML += '<div id="mode">';
	
	chooseMode.innerHTML += '<h2>Choose a game Mode</h2>';
	
	
	chooseMode.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Easy\" id=\"EasyMode\" onclick=\"easyMode()\" />';
	chooseMode.innerHTML += '<input type=\"button\" name=\"submit\" value=\"Medium\" id=\"MediumMode\" onclick=\"mediumMode()\" />';
	chooseMode.innerHTML += '<input type=\"button\" name=\"submit\" value=\"hard\" id=\"HardMode\" onclick=\"hardMode()\" />';
	chooseMode.innerHTML += '</div>';
	chooseMode.innerHTML += '</div><br /><br />';
		
		
		gameContent.appendChild(chooseMode);	
	
}

function easyMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 1;
	alert (window._Options.Level);
	
	GameStart();
	var elem = document.getElementById('EasyMode');
    elem.parentNode.removeChild(elem);
    return false;
	
	
	
	
	
	
	
}

function mediumMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 2;
	alert (window._Options.Level);
	
	GameStart();
	var elem = document.getElementById('MediumMode');
    elem.parentNode.removeChild(elem);
    return false;
	
	
	
	
	
}

function hardMode()
{
	window._Options.UseGenerator == true;
	window._Options.Level = 3;
	alert (window._Options.Level);
	
	GameStart();
	var elem = document.getElementById('HardMode');
    elem.parentNode.removeChild(elem);
    return false;
	
	
	
	
	
}