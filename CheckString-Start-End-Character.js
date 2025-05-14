/**PROGRAMME TO CHECK find a string starT and with END WITH WHAT NO. ***/

var string = prompt("Enter a string value:");
var StartValue = string.startsWith('w');
var EndValue = string.endsWith('e');

if(StartValue == true && EndValue == true) {
    console.log(`${string} start with W and end with e`);
}
else if(StartValue == true && EndValue == false) {
    console.log(`${string} start with W`);
}
else if(StartValue == false && EndValue == true) {
    console.log(`${string} end with e`);

}
else {
    console.log(`${string} neither start with W nor end with e`);
}