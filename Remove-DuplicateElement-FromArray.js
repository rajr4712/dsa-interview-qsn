/**   JAVSCRIPT PROGRAMME TO REMOVE DUPLICATE ELEMENT FROM ARRAY *****/

const Array = [1,4,5,'Banana', 6,1,4,4,9,3,'Banana'];

const res = Array.filter((element,index) => {
    return Array.indexOf(element) === index;
})

console.log(res);





/*logic: indexOf method check that element present at what index!
 ex- Array.indexOf(1) === 0 , i.e- 0 === 0 its true so its give 1 value , then Array.indexOf(4) === 1 -> 1===1 its true so t will give 4, Array.indexOf(Bnanan) === 0 -> 3 ===3 its true so it will give 'Banana', 
not 1 again its not take coz The filter method is used to create a new array res that contains only the 
unique elements from array,  filter take only uniq element so repetaed element ko lega hi nhi dts y he check only uniq element and return */