/**** REmove Duplicate character from the string ****/
function removeDuplicateChars(str) {

    const uniqueChars = new Set(str);          //using new keyword we create a set
    const result = Array.from(uniqueChars);
    const final = result.join('');
    return final;
    
}

const String ='hello world';
const result = removeDuplicateChars(String);
console.log("String without duplicate characters: ", result);       //output: helo wrd


/*Logic: loc3-> It creates a new Set called uniqueChars. A Set is a built-in JavaScript object that only allows unique values, so any duplicate characters in the string will automatically be removed when adding them to the Set.
its created by using 'new' keyword.
The Array.from method is used to convert the Set back into an array of unique characters.
The join('') method convert back Array into String ,*/



//Method 2 Without using built in Method ->
function removeDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (result.indexOf(str[i]) === -1) {
        result += str[i];
      }
    }
    return result;
  }
  
  const input = "Hello World";
  const output = removeDuplicates(input);
  console.log(output);



/*LOgic : Inside the loop, it checks if the current character (str[i]) is already present in the result string variable by using the indexOf method.
 ex- result.indexOf(str[0]) === -1 , i,e result.indexOf(h) ===-1 , its check result variable me 'h' present hai ya nahi if not i.e -1 is true so by loc 28 the value is added to result empty variable me
 If the character is not found (i.e., indexOf returns -1), it means it's a unique character.
If the character is unique, it appends it to the result string using the += operator.*/




























/*Inside the loop, it checks if the current character (str[i]) is already present in the result string. This is done using the indexOf method, which returns the index of the first occurrence of a character in a string. If the character is not found (indexOf returns -1), it means it is not a duplicate.
If the character is not a duplicate, it is appended to the result string using the += operator.*/