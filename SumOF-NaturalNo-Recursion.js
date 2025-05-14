/***** PROGRAMME TO FIND SUM OF NATURAL NUMBER USING RECURSION Function  ********/

function sum(num) {
    if(num>0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
}

var res = sum(5);
console.log(res)





/* LOGIC: if num=5 then 1 se 5 tak natural no total ko add krega and return value, coz sum(n-1) call hoga 
tab tak jab tak 0 value naa aa jaye ! ex-  5 + 4 + 3 + 2 + 1 + 0 = 15 */