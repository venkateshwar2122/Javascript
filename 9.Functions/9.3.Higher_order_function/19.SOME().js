// to check atleast one element in the given array statisfies given criteria or not,use some()

let a = [1,4,7,8,9,10,15]
let r = a.some((e)=> e>10)
console.log(r)               //true

a = [3,4,5,7]
r = a.some((e)=> e>10)
console.log(r)              //false
