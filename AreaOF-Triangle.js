//Find Area of triangle if base and height is given

var base = prompt("please enter the base value:");
var height =prompt("please enter the height value:");
var area = (base*height)/2;
console.log("The area of triangle is:" +area);


//if triangle side is given a,b,c then find Area of triangle !
var a = 10;
var b = 12;
var c = 5;
var s = (a+b+c)/2;
var p =(s*(s-a)*(s-b)*(s-c));
var area = Math.sqrt(p);
console.log(area);
