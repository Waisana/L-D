 let greetUser = function(){
     console.log('Good morning friendly zonal leaders');
 }

 greetUser();


 //convert the temperatures from fareinheit to kelvin and celiucioius.

 //To convert to celicious 

//  let celicious =(farenheit-32)* 5/9;
//  let kelvin =(farenheit + 459.57)*5/9;

 let square= function(a){
     answer = (a*a);
     return answer

 }

 let theresult = square(32);
 console.log(theresult);

 let name = '' 
if(name ===''){
    console.log('Please provide a name')

}
else{
console.log(name);
}




//challenge on the tip 

let tipfunction = function(total , tip=0.2){
let discount = total * tip;
return discount
}

let yourdisc = tipfunction(20,0.5);
console.log(yourdisc);

//calculate the parameters

function circleValues(rad) {
    return `Perimeter: ${2*Math.PI*rad}, Area: ${Math.PI*rad*rad}`;
  }
  
  console.log(circleValues(10)) //"Perimeter: 62.83, Area: 314.15"
  console.log(circleValues(15)) //"Perimeter: 94.24, Area: 706.85"
  console.log(circleValues(25)) //"Perimeter: 157.07, Area: 1963.49"

  function revsample(a){
    rea =a%10;
    return rea
  }
console.log('Hello')
  console.log(revsample(20));





  //Function to reverse number

  function reverseNum(num) {
    var reverse = 0;
    while(num != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + num%10;
      num = Math.trunc(num/10); // Remove decimal places
    }
    return reverse;
  }
  
  console.log(reverseNum(123)) //321
  console.log(reverseNum(5872)) //2785

console.log('..................')
  let sumofnumba = function(a, b) {
  sum_of_num = a + b;
  div_num = a / b;
  ans_num = a % b;
  square_num = a*b;

 return {
  sum_of_num, div_num, square_num, ans_num
 }
  }

  let theanswers = sumofnumba(7,2);

  console.log(theanswers.sum_of_num);
  console.log(theanswers.div_num);
  console.log(theanswers.ans_num);
  console.log(theanswers.square_num);

  console.log('................')
  let remaindernum = 5 % -3;
  console.log(remaindernum);

  let remainder = 0 % 10;
console.log(remainder); // NaN

console.log('.............');
let age = 6;
let messege ;

if(age >= 18){
  messege ='You can drive';
}
else {
  messege ='You can not drive';
}
console.log(messege);

console.log('.............Using ternary operator..............');

age>=18 ? messege ='You can drive' : messege ='You can not drive' ;
console.log(messege);

messege1 = age >=18 ? 'Your are old enough': 'Now look at this young man, hahaha';
console.log(messege1);


// Grading a student


console.log('...........................................');
console.log('Grading a student');

let grading = function(marks,ttmarks){
  let perc = (marks/ttmarks)* 100;
  let lettergrade ='';
  if(perc >= 85){
    lettergrade = 'A';
  }
  else if(perc >=75){
    lettergrade = 'B';
  }
  else if(perc >=65){
    lettergrade = 'c';
  }
  else if(perc >=50){
    lettergrade = 'D';
  }
  else{
    lettergrade = 'F';
  }
  return `You got an ${lettergrade} (${perc}%)`;
}

let graderesult = grading(5,20);
console.log(graderesult);
