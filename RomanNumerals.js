var Roman = function(){
  this.romanValues = [["M",1000],["CM", 900], ["D", 500], ["CD", 400],
             ["C",100], ["XC", 90],["L", 50],["XL", 40],
             ["X", 10],["IX", 9],["V",  5],["IV", 4],["I", 1]];
 }

Roman.prototype.toRoman = function(digit){
  var string = "";
  this.romanValues.forEach(function(value){
    while(digit >= value[1]){
      digit = digit - value[1]
      string += value[0];
    }
  });
  return string;
};

module.exports = Roman;