/*PRINT A STAR OR NUMBER PATTERN IN REVERSE ORDER WAY */

function printPattern(row) {

    for(let i=row; i>=1; i--) {
        let temp='';


        for(let j=1; j<=(row-i) * 2; j++ ) {
            temp += '';
      
        }   

        for(let k=1; k<=i; k++) {
            row += '*';
        }

        console.log(row);
     } 

}

//call a function
printPattern(5)


//Q2  Number pattern in reverse ->
function printPattern2(rows) {

    for(let i=rows; i>=1; i--) {
        let output = '';

        for(j=1; j<=(rows-i) * 2; j++) {
            output += '';
        }

        for(let k=1; k<=i; k++) {
            output += k + '';
        }

        console.log(rows)
    }
}

printPattern2(5);