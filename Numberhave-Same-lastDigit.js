//** Program to check if all number have same last digit. ****/

var a = prompt("Enter your first number:");
var b = prompt("Enter your Second number:");
var c = prompt("Enter your third number:");

var res1= a%10;          //10 se divide krne par remainder hamesha uska last digit hota hai!
var res2 = b%10;
var res3 = c%10;

if(res1 == res2 && res1 == res3) {
    console.log(`${a} , ${b} , ${c} are having the same last digit`)
}
else {
    console.log(`${a} , ${b} , ${c} are NOT having the same last digit`)
}

