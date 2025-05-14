//Programme to gnerate random no in fractional value

var a = Math.random();    //it generate random no every time b/w 0 to 1 (fraction value)
console.log(a);


/*if we want a number b/w Acording to user a Specific Highest no se lower no k bich
FORMULA : Math.random() * (Highest no - lower no) + 1   */

var b = Math.random() * (10-1) + 1;     //it generat a no 1 se 10 k bich me but in fractional value(ex- 2.444, 3.67788. 9.44555 etc)
console.log(b); 



// Math. floor() method is used to round off the number passed as a parameter to its nearest integer value!
var c = Math.random() * (100 - 1) + 1;
var value = Math.floor(c)    //it generate random no b/w 1 to 100 but in integer value me .
console.log(value); 