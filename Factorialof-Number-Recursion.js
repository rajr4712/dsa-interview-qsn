/**** RECURSION : The process in which a function call itself directly or indirectly is called recursion. And the corresponding function is called as recursive functio. *****/

 function factorial(n) {
    //base case
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: Multiply n by the factorial of (n-1)
        return n * factorial(n - 1);
    }
}

let n = prompt("Enter the number:")
let obj = factorial(n)    
console.log(`The factorial of ${n} is: ${obj}`);




/*Logic of code: Let's walk through an example using n = 10:
The function factorial(10) is called.
It checks the base case, which doesn't apply because n (10) is not 0 or 1.
It enters the recursive case and returns 10 * factorial(9).
It calls factorial(9) and returns 10 * 9 * factorial(8).
This process continues until it reaches the base case (factorial(1)), at which point it starts unwinding the recursion.
The final result is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1, which is the factorial of 10, and this result is printed to the console.*/