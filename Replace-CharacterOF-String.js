/*PROGRAMMER TO REPLACE CHARACTER INSODE A STRING IN JAVASCRIPT 
replace() : the replace function finds, replaces and return a new string , Syntax - replace(find,replace) */


//METHOD 1 ->
 var string = 'Rahul has a black Shirts and black R15 BIKE';
 var newString = string.replace('black', 'blue');
 console.log(newString);
 
 
 //mrthod 2 Using RegExp ->
var string = 'Rahul has a black Shirts and black R15 BIKE';
var reg = new RegExp('black', 'gi');     //g: globally search, i: case sensitive Capital and small letter ko ek tarah treat krega usko different word le k nhi chalega (ex- Rahul = rahul!)
var newString = string.replace(reg, 'blue');
console.log(newString);



