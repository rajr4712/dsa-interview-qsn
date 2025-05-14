//PROGRAMME to check if the number is prime or not 

var num = prompt("Enter the number:");
if(num<=1) {
    console.log(`${num} is not a prime number`);
}
else if(num == 2) {
    console.log(`${num} is a prime number`);
}
else {
    for(i=2; i<num; i++) {
        if(num%i === 0) {
            var output = `${num} is not a prime number`;
            break;         //jaise hi one times check hua and if it is not a prime then else wale code tak jayega hi nhi break ho k if wala code execute kr dega!
        }
        else{
            var output = `${num} is a Prime Number`;
        }
    }
    console.log(output);
}



/*LOGIC OF CODE: let num=6 then 6%2 == 0 ,then ab ye aage loop chala k and 3,4,5 se divide kiye bina,
Loop break(loc12) kar, if block of code chala dega and print it is not a prime no !!*/