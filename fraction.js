
function Fraction()
    {
        this.Numerator = 0;
        this.Denominator = 0;
        this.DecValue = 0;
        this.PercentOfTotal = 0;
        this.IsMystery = false;
        this.Color = "";
        this._fractionAsString = "";
    }
      

Fraction.prototype.numdenum = function(inNumerator, inDenominator)
        {
            this.Numerator = inNumerator;
            this.Denominator = inDenominator;
            this._fractionAsString = this.Numerator + "/" + this.Denominator;
            this.DecValue = frac2dec(this._fractionAsString);
        };

Fraction.prototype.dec = function(inDecValue)
        {
            this.DecValue = inDecValue;
            this._fractionAsString = dec2frac(inDecValue);

            var convertedFraction = new Array();
            convertedFraction = this._fractionAsString.split("/");
            this.Numerator = convertedFraction[0];
            this.Denominator = convertedFraction[1];
        };
        
Fraction.prototype.string = function(fraction)
        {
            this._fractionAsString = fraction;
            var convertedFraction = new Array();
            convertedFraction = this._fractionAsString.split("/");

            this.Numerator = convertedFraction[0];
            this.Denominator = convertedFraction[1];

            this.DecValue = frac2dec(this._fractionAsString);
        };

Fraction.prototype.GetAsString = function()
        {
            if (this.IsMystery)
                return "?/?";
            else
             return this.Numerator + "/" + this.Denominator;
        };
    