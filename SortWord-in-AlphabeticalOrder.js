/*JAVASCRIPT PROGRAMMER TO SORT WORDS IN ALPHABETICAL ORDER */

var string = 'facebook';
console.log(string);

var stringArr = string.split('');            //split('') : convert string into array 
console.log(stringArr);

var arrangeArr = stringArr.sort();          //sort() : arrang array each element in alphabetical order          
console.log( arrangeArr);

var newString = arrangeArr.join('')        //join('') : convert array into string !
console.log(newString);


