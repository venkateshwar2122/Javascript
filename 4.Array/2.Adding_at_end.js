let a = [1,2,3,4,5,6]
//method1
a.push(1000)
console.log(a)
//method2
a[a.length] = 2000
console.log(a)

//empty holes

let b = [1,2,3]
b[10] = 2000
console.log(b)     // [ 1, 2, 3, <7 empty items>, 2000 ]


//old value replace with new value

let c = [1,2,3]
c[1]=3000
console.log(c)   //[ 1, 3000, 3 ]

//SPREAD OPEREATOR(...)

let d = [34,35,36]
d = [...d , 4000]
console.log(d)   // [ 34, 35, 36, 4000 ]

