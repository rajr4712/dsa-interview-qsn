/**Write a program to find Number of a occurrence of a Character in the string(kisi word me koi specific
  character  kitni baar repeat hota hai , ex- madam me 'm' 2times repeat hai). ***/

  //Method 1 ->
var string = prompt("Enter a string :");
var letter = prompt("Enter a letter :");
var length = string.length;

let count = 0;
   
for (let i = 0; i < string.length; i++) {     //string me user entry pass krega uske length jitna loop chal k iterate krega har ek character par
    if (string[i] === letter) {
        count++;      //count method run and loop and count letter
    }
}

console.log(`The letter "${letter}" appears ${count} times in the  in ${string} string.`);


//Method2 ->
function countOccurrences(str, char) {
   
    //at start count 0 hai
    let count = 0;
   
    for (let i = 0; i < str.length; i++) {        //str me user entry pass krega uske length jitna loop chal k iterate krega har ek character par
        if (str.charAt(i) === char) {
            count++;       //count krega character with every loop! 
        }
    }

    return count;
}

// Example usage
const inputString = "Hello";
const charToCount = "l";
const result = countOccurrences(inputString, charToCount);
console.log(`The character "${charToCount}" appears ${result} times in the string.`);