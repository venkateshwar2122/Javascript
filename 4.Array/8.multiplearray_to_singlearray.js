//method 1 using spread operator
let a = [10,20,30]
let b = [99,98,97]
let c = [67,68,69]
 
let r = [...a, ...b, ...c]
console.log(r)

//method 2 using concat function
let x = a.concat(b,c)
console.log(x)
