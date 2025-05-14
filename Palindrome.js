/*PALINDROME: A string is a palindrome. If it is a read the same From forward or a backward 
for.example dad , madam ,level , mam are  read the Same either from forward or backward...  **/


//Ex-1 program to check if the string is palindrome or not Using For Loop
function checkPalindrome(string) {
   const len = string.length;
   for (let i = 0; i < len / 2; i++) {
       // check if first and last string are not same
       if (string[i] !== string[len - 1 - i]) {           
           return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}

const string = prompt("Enter a String: ");
const value = checkPalindrome(string);  //call a function
console.log(value);



//How calculate : loc12  0 index pe - l and  len -1 -i -> total length of level is 5 so 5-1-0 = 4 i.e 4 index pe means last index pe rakha string value se compare !


//Ex2- program to check if the string is palindrome or not Using Recursion Function
function checkPalindrome(string1) {

   // convert user enter string into an array
   const arrayValues = string1.split('');

   // reverse the array values
   const reverseArrayValues = arrayValues.reverse();

   // convert reverse array value back to string me
   const reverseString = reverseArrayValues.join('');

   if(string1 == reverseString) {
       console.log('It is a palindrome');
   }
   else {
       console.log('It is not a palindrome');
   }
}

//take input
const string1 = prompt('Enter a string: ');
checkPalindrome(string);





