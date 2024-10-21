//to find min,amx element in array using Math fxn

let a = [10,20,30,40,20,20,50]
console.log(Math.min(a))     // WRONG
console.log(Math.max(a))     // WRONG

console.log(Math.min(...a))   //RIGHT....we have to use spread operator
console.log(Math.max(...a))   //RIGHT
