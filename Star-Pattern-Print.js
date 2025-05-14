/*Programme to print a Star Pattern */
for (let i = 1; i <= 5; i++) {                 //this loop for row 
    let row = "";                           //we initialize an empty string row to store the pattern for each row.
    for (let j = 1; j <= i; j++) {           // this loop for column
      row += "* ";
    }
    console.log(row);
  }


/*Logic of code: i=1; its create first row but not print anything coz 2nd line me kuch console kr ni rhe hai 
  so, now go to loc3 where one more loop run for column How work -> i =1 , j=1 ,j<=1 i.e its run for ist column tak  and ye row empty string variable  me 1 star print kr dega, now i=2 we are in second row now j=2, j<=2 tak loop run, i.e two column create and 2 star print and so on.
  in last i=5,we are in fifth row and j=5,j<=5 i.e 5 row me ye column tak ye loop chalega and star print krta jayega in each column me*/



  /*Programme to print the Following number in the star Pattern */
  for(let i=1; i<=5; i++) {
    let row = '';

    for(let j=1; j<=i; j++) {
        row += j + '';
    }
    console.log(row);
  }


  /*Output Q2- :   1              Output Q1->   *
                   1 2                          * *
                   1 2 3                        * * *
                   1 2 3 4                      * * * *
                   1 2 3 4 5                    * * * * *           */