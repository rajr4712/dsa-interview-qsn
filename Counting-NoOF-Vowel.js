
/* Regex: Regex is known as regular expression. its used to match , test, and find character from a string .
 To find Vowel: expression[a,e,i,o,u] and Modifier:gi - its used to search a given expression value */

var string = prompt("please enter a string value:");
const reg = /[aeiou]/gi;          //reg search vowel from string value se
var chars = string.match(reg);    //if match given vowel value then usko print kara denge loc8
console.log(`the vowels are ${chars}`);
console.log(chars.length);      //count total vowel length


 
