//Sort a Number array in descending order
const numbers = [23,34,123,43,5,77,38,2];

const output = (numbers.sort((num1,num2) =>  num2 - num1));

console.log(output);



//Sort a Number array in ascending order
const numbers1 = [23,34,123,43,5,77,38,2];

const output1 = (numbers.sort((num1,num2) =>  num1 - num2));

console.log(output1);






/*LOGIC: The `sort` method takes a comparison function as an argument. This function compares two numbers at a time.
If the comparison function returns a positive value, it means `num2` should come before `num1` in the sorted order, and vice versa for a negative value
num2 - num1 > 0 ,Sorting order [num2, num1] , if <0 ,Sorting order: [num1,num2]
By subtracting num1 from num2, we are sorting the numbers in descending order. If we subtracted num2 from num1, it would sort the numbers in ascending order.The sorted array is then assigned to the output variable.*/