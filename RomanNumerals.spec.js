var Roman = require("./RomanNumerals.js");

describe("toRoman", function(){
  var numeral = new Roman();
	
	it('compute 1 digit', function(){
		expect(numeral.toRoman(9)).toEqual("IX");
	});
	it('computes 2 digits', function(){
		expect(numeral.toRoman(75)).toEqual("LXXV");
	});
	it('compute 3 digits', function(){
		expect(numeral.toRoman(911)).toEqual("CMXI");
	});
});