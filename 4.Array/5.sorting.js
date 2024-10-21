//sorting

let a = [10,20,30,40,20,20,50]
console.log(a.sort)  //it does string based sorting, therefore don't use this

console.log(a.sort((x,y)=> x-y))  //sort in ascending order, note:sort has 2 brackets

console.log(a.sort((x,y)=>y-x))   //sort in descending order
