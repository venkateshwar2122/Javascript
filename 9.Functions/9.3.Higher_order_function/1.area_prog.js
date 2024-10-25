//calculate area of squares, area of circles, volume of cubes by using array of values

//area of square
let a = [3,7,3,4,8]
let r = []
for (let i=0 ; i<a.length ; i++){
    r.push(a[i]*a[i])
}
console.log(r)


//area of circle
a =[4.78, 5.61, 9.8, 5.1]               // reintialised "a" therefore don't use "let"
r = []
for(let i =0 ; i<a.length ;i++){
    r.push(3.14*a[i]*a[i])
}
console.log(r)


//area of cube
a = [4,8,6,3,2]
r = []
for(let i=0;i<a.length ;i++){
    r.push(a[i]**3)              //power operator
}
console.log(r)
