// to extract subarray from a given array
//we use slice()
//note its slice() not splice()

let a = [10,20,30,40,50]

console.log(a.slice(2))  // (start index)
                         // output [30,40,50]

console.log(a.slice(1,3))  // (startindex , endindex-1)
                           // output [20,30] and not [20,30,40]
                           // its taking endindex-1 value
