function printFibonacci(n) { 
    var a =0; b=1; c;
    console.log(a);
    console.log(b);
    
    for(i=2; i<n; i++) {
        var c = a+b;
        console.log(c);
       
        a = b;
        b =c;
 }

}
const value = printFibonacci(20);
console.log(value);



/** Using recursion method : RECURSION : The process in which a function call itself directly or indirectly 
is called recursion. And the corresponding function is called as recursive function. *****/

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
         return fibonacci(n - 1) + fibonacci(n - 2);
        
    }  
  }
  //
   function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
      console.log(fibonacci(i));
    }
  }
    
  // Example usage
  const count = 10;
  printFibonacciSeries(count);
  
  