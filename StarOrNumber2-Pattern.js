//Q1 Number Pattern print ->
function printPattern (row) {

    for(let i=1; i<=5; i++) {
         let output = '';

        for(let j=1; j<=row-i; j++) {
            output += '';
        }

        for(let k=1; k<=i; k++) {
            output += k + '';
        }
 
        console.log(output);

    }
}

printPattern (5)      //call a function with 5 row parameter pass!



//Q2 Star Patter print ->
function printPattern1(rows) {

    for(let i=1; i<=rows; i++) {
        let output = '';
    

    for(let j=1; j<=rows-i; j++) {
        output += '';
    }

    for(k=1; k<=i; k++) {
        output += '*';
    }

    console.log(output);

}

}

//call a function
printPattern1(5)          


/*Output Q1 ->                        Q2 - >
              1                            *
             1  2                        *  *
            1  2  3                    *   *   *
          1   2  3  4                *    *  *    *
        1   2   3  4   5           *    *  *    *    *
    

