/*PROGRAMME TO CONVERT FIRST LETTER OF A STRING INTO UPPERCASE  */

var string = 'rahul lets go to Goa';
var first = string.charAt(0);            
console.log(first)

var convert = first.toUpperCase();
console.log(convert);

var temp = string.slice(1);   //1 index se character ko alag karna.
console.log(temp);

var final = convert + temp;
console.log(final);





/*charAt() : to get a charcter at an index .
toUpperCase() : to upper case character.
slice() ; to slide any character form the string . */

