/*Programme for LInear Search programme */
function linearSearch(array,searchValue) {
    
    for(let i=0; i<array.length; i++) {
        if(array[i] === searchValue) {
            return i;
        }
    }
    return -1;

}

let numberArray = [1,2,3,4,5,6];
let searchValue = 4;

console.log(linearSearch(numberArray,searchValue));

//output : 3 (index of 4 is 3)


/*Linear search Programme: Linear Search(sequential search), is a method for finding
an element within a list or an array.
Linear search iterates through each element in an array,starting from the 0th index and searching until the elementis found or the end of the array is reached.*/