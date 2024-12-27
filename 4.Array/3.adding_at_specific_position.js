//splice

/* splice syntax 

arr_name.splice(index,noOfElementtoDelete,e1,e2,e3,....en)

where,
e1,e2,e3 are elements to be inserted */

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.splice(2,3)) //      [ 3, 4, 5 ]
console.log(a)             //    [1,2,6,7,8,9,10]
 

let  b = [1,2,3,4,5,6,7,8,9,10]
console.log(b.splice(2,3,1001,1002,1003))        // [ 3, 4, 5 ]
console.log(b)                                   // [1,2,1001,1002,1003,6,7,8,9,10]

//adding at beginning

let c = [1,2,3,4,5,6,7,8,9,10]
console.log(c.splice(0,0,1000))                 // []
console.log(c)                                  // [1000,1,2,3,4,5,6,7,8,9,10]

//add at beginning using unshift

let d = [1,2,3,4,5,6,7,8,9,10,11]
console.log(d.unshift(1000))
console.log(d)
