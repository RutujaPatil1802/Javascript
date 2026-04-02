const accountId = 123459
let accountEmail = "rutuja@123gmail.com"
var accountPass = "23415"
accountCity="Jaipur"
let accountState  //undefined by default
//difference between let and var 
    /*let is generally used nowdays because var doesnt support blocks.
    It generates issue in block and functional scope 
    eg.- if accountPass is used again in a function for eg., then it will change the previously declared var only, not the one inside function.
    */

//accountId = 2 //not allowed because const variables are immutable throughout the code
accountEmail="rutuja2004@gmail.com"
accountPass = "2121212"
accountCity="Delhi"
console.table([accountId,accountEmail,accountPass,accountCity,accountState])