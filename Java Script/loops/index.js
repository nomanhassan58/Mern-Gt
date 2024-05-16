let string =5;
console.log(string);
if(string < 10 || string >20){
    console.log("String is outside")
}
else{
    console.log("String is inside")
}


function testElseIf(val) {
    if (val < 5) {
      return "Smaller than 5";
    } else if (val >= 5 && val <= 10) {
      return "Between 5 and 10";
    } else {
      return "Greater than 10";
    }
  }
  
  
  console.log(testElseIf(0));   
  console.log(testElseIf(5));   
  console.log(testElseIf(7));   
  console.log(testElseIf(10));  
  console.log(testElseIf(12)); 



  function add(a,b)
  {
    console.log(a+b)
  }
  add(9,8)