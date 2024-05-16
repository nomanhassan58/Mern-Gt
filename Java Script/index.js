console.log("Finally Here");

var myString = "Finally on JavaScript !";
console.log(myString);

const num = 41;
console.log(num);

// addition and subtraction //
var num1 = 4;
var num2 = 5;
var num3 = num1 + num2;
var num4 = num1 - num2;
console.log("Addiotion = ", num3);
console.log("Subtraction = ", num4);

var num1 = 10;
var num2 = 5;

// Comparison
var greaterThan = num1 > num2; 
var lessThan = num1 < num2; 
var equalTo = num1 === num2; 

console.log("Is num1 greater than num2?", greaterThan);
console.log("Is num1 less than num2?", lessThan);
console.log("Is num1 equal to num2?", equalTo);

//Multiple conditions using boolean
var sunny = true;
var warm = true;
var cold = false;
 
var goOutside = sunny && warm && cold;
console.log("Should we go out to party ? ", goOutside);


// concatination
var first = "This is the first sentence";
var second = "This is the second sentence";
var third = first + " This is the middle " + second;
console.log(third);

//string method
var first = "Java script is used for functionality in websites";
var upperSentence = first.toUpperCase();
console.log(upperSentence);

var sentence = "I GOT MY FIRST PROJECT OF MERN STACK";
var lowerSentence = sentence.toLowerCase();
console.log(lowerSentence);
