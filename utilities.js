	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};
	
	function getRandomInt (min, max) 
	{
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function frac2dec(fraction) 
	{
		
		var fractionParts = fraction.split('-');
		
		if (fractionParts.length === 1) 
		{
			fractionParts = fraction.split(' ');
		}
		
		if (fractionParts.length > 1 && fraction.indexOf('/') !== -1) 
		{
			var integer = parseInt(fractionParts[0]);
			var decimalParts = fractionParts[1].split('/');
			var decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);
			
			return integer + decimal;
		}
		else if (fraction.indexOf('/') !== -1) 
		{
			var decimalParts = fraction.split('/');
			var decimal = parseInt(decimalParts[0]) / parseInt(decimalParts[1]);
	                return decimal;
		}
		else
		{	
			return parseInt(fraction);
		}
	};
	
	//http://bateru.com/news/2011/11/improved-code-for-javascript-decimal-to-fraction/
	function dec2frac(d) 
	{
		var top = d.toString().replace(/\d+[.]/, '');
		var bot = Math.pow(10, top.length);
		if (d > 1) {
			top = +top + Math.floor(d) * bot;
		}
		var x = gcd(top, bot);
		return (top / x) + "/" + (bot / x);
	};
	
	function gcd(a, b) {
	    return (b) ? gcd(b, a % b) : a;
	};
	
	
	
	
	