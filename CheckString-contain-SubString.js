/*PROGRAMME TO CHECK WHETHER A STRING CONTAINS A SUBSTRING OR NOT(STRING K UNDER SPECIFIC STRING FIND KARNA) */

var string = 'hello how are you ';
var subString = 'how';
var test = string.includes(subString);      
console.log(test);

//check 'how' prsent at what index . output - 6
var test1 = string.indexOf(subString);         //check 'how' prsent at what index . output - 6
console.log(test1);                                 
 



 


/*string.includes() : thr javascript includes() method check if one string can be found inside another string or not
 and return responce in the form of TRUE OR FALSE 

 string.indexOf : its also check specific string and if found pass its index number , if not pass -1 in responce */