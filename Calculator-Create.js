/********  PROGRAMMME TO CREATE A CALCULATOR IN JAVASCRIPT  ******/

var num1 = prompt("Enter a first number");
var num2 = prompt("Enter a Second number");
var opr = prompt("Plese select any Operator value +,-,*,/");

switch(opr) {
    case "+":
        var res = parseInt(num1) + parseInt(num2);
        console.log(`${num1} + ${num2} = ${res}`);
        break;
        
    case '-':
        var res = parseInt(num1) - parseInt(num2);
        console.log(`${num1} - ${num2} = ${res}`);
        break;

    case '*':
        var res = parseInt(num1) * parseInt(num2);
        console.log(`${num1} * ${num2} = ${res}`) ;
        break;

    case '/':
        var res = parseInt(num1) / parseInt(num2);
        console.log(`${num1} / ${num2} = ${res}`) ;
        break;

    default:
        console.log('Invalid Input');

}
