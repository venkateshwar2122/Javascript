//delete last element
//pop()

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.pop())               // 10
console.log(a)                      //[1,2,3,4,5,6,7,8,9]


//delete first element using shift

let b = [1,2,3,4,5,6,7,8,9,10]
console.log(b.shift())
console.log(b)

//using splice


let c = [1,2,3,4,5,6,7,8,9,10]
console.log(c.splice(2,3))         // [3,4,5]
console.log(c)                    // [1,2,6,7,8,9,10]
