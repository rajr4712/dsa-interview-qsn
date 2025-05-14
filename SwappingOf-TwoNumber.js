//SWAPPING OF TWO NO USING TEMP VARIABLE ->
var a = 5;
var b = 6;
console.log(`the value of a is:${a} and b is:${b} `);

var temp;           //temp variable declare
temp = a;            // temp me a ki value store i.e temp = 5
a = b;               //now a is vacant so, a me b ki value store i.e now a = 6
b = temp;            // now b = 5
console.log(` After swapping \n the value of a is:${a} and b is:${b}`);




//SWAPPING OF TWO NO USING WITHOUT TEMP VARIABLE ->
var a = 5;
var b = 6;
console.log(`the value of a is:${a} and b is:${b} `);

var a = a+b;           //Here a =5+6 -> 11 
var b= a-b ;          ///b=11-6 -> 5 (so now b=5)
var a = a-b;          //a = 11-5  -> 6 (so a=6) ! 
console.log(` After swapping \n the value of a is:${a} and b is:${b}`);



//Method 3 without using any variable and simple! ->
var a = 5;
var b = 6;

[a,b] = [b,a]
console.log(` After swapping \n the value of a is:${a} and b is:${b}`);





