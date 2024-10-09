//splice

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.splice(2,3))
console.log(a)


let  b = [1,2,3,4,5,6,7,8,9,10]
console.log(b.splice(2,3,1001,1002,1003))
console.log(b)

//adding at beginning

let c = [1,2,3,4,5,6,7,8,9,10]
console.log(c.splice(0,0,1000))
console.log(c)

//add at beginning using unshift

let d = [1,2,3,4,5,6,7,8,9,10,11]
console.log(d.unshift(1000))
console.log(d)