/** PROGRAMME TO FIND A FACTOR OF A GIVEN NUMBER **/

var number = prompt("Enter a number :");
for(var i=1; i<=number; i++) {
    if (number%i==0) {
        // console.log('The factor of given number is  '+i);
        console.log(i);
    }
}

//factor of number
