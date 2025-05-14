/*** PROGRAMME TO FIND A SPECIFIC NUMBER FROM A COLLECTION BASED ARRAY  **/

function binarySearch(arr, searchValue) {
    let left=0;                     //start of the array
    let right = array.length-1;      //end of the array 

    while(left <= right) {
        const mid = Math.floor((right + left)/2);   //finding middle element
        
        if (arr[mid] === searchValue) {
            return mid;

        } 
        else if(arr[mid] < searchValue) {
            left = mid + 1;
        }   
        else {
            right = mid - 1;
        }  
    }
    return -1;
}


let arr = [13,21,23,34,55.86,87,98,99];
let search = 55;

console.log(binarySearch(arr,search));

//output : 4 (the index of 55 in the array!)
