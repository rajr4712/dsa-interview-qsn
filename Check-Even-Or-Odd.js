//By if else Method ->
var num = prompt("Enter the number: ");
if(num%2 == 0) {
    console.log(`${num} is even number`)
}
else {
    console.log(`${num} is odd number`)
}



//By Ternary Operatoe ->
var num = prompt("Enter the number: ");
var res = (num%2 == 0) ? "even" : "odd";
console.log(res);
console.log(`${num} is ${res} number`);