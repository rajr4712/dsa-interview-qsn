/**JAVASCRIPT PROGRAMME TO FIND A MAX AND MINUMUM VALUE */

//Find min(smaller) value
const arr = [23,34,123,43,5,77,38,2];
const min = Math.min(...arr);
console.log(min);


//find Max value ->
const max = Math.max(...numbers);
console.log(max);



//find Max and Min value Without using in built method ->
const array = [23,34,123,43,5,77,38,2];

var min1 = array[0];
var max1 = array[0];

for(var i=1; i<array.length; i++) {
    if(array[i] <min1) {
        min1 = array[i];
    }

    if(array[i] > max1) {
        max1 = array[i];
    }
}

console.log(min1);       //output: 2
console.log(max1);       //output: 123


