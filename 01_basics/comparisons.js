console.log("2" > 1) //2 converted to num
console.log("02" > 1) //2 converted to num
console.log("")

console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true-->converted to 0
console.log("")

console.log(undefined > 0)//false
console.log(undefined == 0)//false
console.log(undefined >= 0)//false
console.log("")

//=== strict check, checks datatypes also
console.log("2"===2) //false
console.log("2" == 2) //true
//do not use any of these conversions in your code