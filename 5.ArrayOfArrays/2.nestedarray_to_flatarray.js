let a = [[4,5,6,2], [5,8,7], [7,1,3]]

// flat()
console.log(a.flat())  // [4,5,6,2,5,8,7,7,1,3]
  
let b = [[5 , [6,5,[4,5]]], [4,7]]

//flat(1)
console.log(b.flat(1))  // [ 5, [ 6, 5, [ 4, 5 ] ], 4, 7 ]

//flat(2)
console.log(b.flat(2))  // [ 5, 6, 5, [ 4, 5 ], 4, 7 ]

//flat(3)
console.log(b.flat(3))  // [ 5,6,5,4,5,4,7]
