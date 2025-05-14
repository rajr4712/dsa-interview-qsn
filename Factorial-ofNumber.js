/***   PROGRAMME TO PRINT FACTORIAL OF NUMBER   ******/

// var num = prompt("Enter the number: ");
var num = 15
var factorial = 1;
if(num == 0) {
    console.log(`the factorial of ${num} is 1`);
}
else if (num<0) {
    console.log(`the factorial of -ve number is not possible`);
}
else {
    for(var i=1; i<=num; i++) {
        factorial = factorial * i;      
    }
    console.log(`the factorial of ${num} is ${factorial}`);
}



/*LOGIC OF CODE: At starting factorial = 1, if num=5 (enter by user), now for loop run then by loc12,13 through 
factorial=1*1 -> 1,factorial = 1*2 = 2, so  factorial me 2 store now then factorial= 2*3=6,and so on 
factorial= 6*4=24 , at last factorial=24*5=120 , so factorial of 5 is 120 */


