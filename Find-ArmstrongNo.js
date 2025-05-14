//*** JavaScript program to find the Armstrong number in an interval *****/
var num = prompt("enter the number");
var temp = num;
var numberOfDigit= num.toString().length;
var sum = 0;
while(temp>0) {
    var digit = temp%10;                      // remainder : 3
    sum = sum + digit ** numberOfDigit;       // 0 + 3**3 = 27 (cube of 3)
    temp = parseInt(temp/10);                  //let num=153 i.e temp=153/10 -> 15.3 = 15 (due to parseInt method)
}
//again loop run temp=15 in loc3 and follow same process
if (sum == num) {
    console.log(`The given number ${num} is armstrong`) ;
    } else{
        console.log(`the given number ${num} is not a armstrong number`)
}



/**An Armstrong number, also known as a Narcissistic number, is a number that is equal to the sum of its own digits raised to the power of the number of digits. 
EX- the number 153. It has three digits: 1, 5, and 3. If we raise each digit to the power of 3 
(the number of digits) and sum them up: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 */

//NOTE : 153 , 371 , 1634, 8208 IS A ARMSTRONG NUMBER .


//Ex 2 ->
function isArmstrongNumber(num) {
    // Convert the number to a string.
    const numberString = num.toString();
  
    // Calculate the sum of the cubes of each digit in the number.
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i], 10);
      sum += digit ** 3;
    }
  
    // Return true if the sum is equal to the original number, false otherwise.
    if (sum == num) {
        console.log(`The given number ${num} is armstrong`) ;
        } else{
            console.log(`the given number ${num} is not a armstrong number`)
    }
    
  }
  
  // Example usage:
  const ex1 = isArmstrongNumber(153); 
  const ex2 = isArmstrongNumber(371); 
  const ex3 = isArmstrongNumber(23); 
  const ex4 = isArmstrongNumber(1634);  //4 digit ka correct nhi bateyega! uske liye loc27 me ** 4 krna hoga , same as for 5digit no and so on....
  