/*** PROGRAMME TO REVERSE A STRING USING IN-Built METHOD IN JS ****/

let string = "javascript";
let stringArr = string.split('')
let stringArr1 = stringArr.reverse();
let newString = stringArr1.join('');
console.log(newString);                //output: tpircsavaj



//U can also write lOC5,6,7 IN ONE Line like this : - string.split('').reverse().join('') 



//Method 2: Using without in built method -
let string1 = 'javascript';
let reverseString = '';         //empty variable take to store reverse string value!

for(let i=string1.length - 1; i>=0; i--) {
    reverseString = string1[i];
    
    console.log(reverseString);
    
}


