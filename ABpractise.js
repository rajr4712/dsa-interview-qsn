// const a = 5;
// const b = 10;
// const sum = a+b;
// console.log(sum);

// let c = prompt("enter a number a : ");
// let d = prompt("enter a number b :");
// let sum1 = parseInt(c) + parseInt(d);
// console.log(sum1);


//check even or odd  ->
// let a = prompt("enter a number: ");
// if(a%2==0) {
//   console.log("even");
// } else{
//   console.log("odd");
// }


//check prime no - 
// let num = prompt("enter a number");
// if (num == 2) {
//   console.log(`${num} is  a prime no`);
// } 
// else if(num<2) {
//   console.log(`${num} is not a prime no`);
// }
// else {
//   for(let i=2; i<num; i++) {
//     if(num%i == 0) {
//       console.log(`${num} is not a prime no`);
//       break;
//     } else {
//       console.log(`${num} is a prime no`);
//     }
//   }
// }



//check palindrome -
// function checkPalindrome(string) {
//   let len = string.length;

//    for(let i=0; i<len/2; i++ ) {
//     if(string[i] != string[len - 1 - 0]) {
//       return "its not a palindrome";
//     } 
//     else {
//       return "its a palindrome";
//     }
//    }

// }

// var string =prompt("enter a string :");
// console.log(checkPalindrome(string));


//swapping of no -
// let a = 5;
// let b = 10;
// console.log(`the value a is ${a} and b is ${b}`);

// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`the value a is ${a} and b is ${b}`);


//without any variabled -
// var a = 5;
// var b = 10;
// var a = a+b;  //15
// let b = a-b;   //15-10 - 5
// let a = a-b;   //15-5 - 10 


// [a,b] = [b,a];
// console.log(`the value a is ${a} and b is ${b}`);



//generate random no - 
// let a = Math.random();
// console.log(a);

// let b = Math.random() * (10 - 1) + 1;
// console.log(b);

// let  c = Math.floor(b);
// console.log(c);


//
// let string = "javascript";
// let reverse = string.split("").reverse().join("");
// console.log(reverse);


//recursion method -  
// let string = "javascript";
// let reverseString = "";

// for(let i=string.length - 1; i>=0; i--) {
//   let reverseString = string[i];
//   console.log(reverseString);
// }



// let a = Math.random() * (10-1) +1;
// console.log(a);
// let b = Math.floor(a);
// console.log(b);



//fibonacci series -
// function fibonacci() {
//     let a=0;
//     let b=1;
//     let c;

// }


// function fibonacci(n) {
//   let a=0; b=1; c;
//   console.log(a);
//   console.log(b);

//   for(let i=2; i<n; i++) {
//     var c=a+b;
//     console.log(c);

//     a=b;
//     b=c;
   
//   }
// }

// console.log(fibonacci(6));


function fibonacci(n) {
    var a=0; b=1; c;
    console.log(a);
    console.log(b);

    for(i=2; i<n; i++) {
        var c=a+b;
        console.log(c);

        a=b;
        b=c;
    }

}

console.log(fibonacci(10))


function palindrome() {
    
}