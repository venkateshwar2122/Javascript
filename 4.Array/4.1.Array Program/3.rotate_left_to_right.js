//rotate first k elements from left to right within the array

let a=[1,2,3,3,4,4,5,1,2,2,5]

let k= 4
for(let i=1 ; i<=k ;i++){
a.push(a.shift())
}

console.log(a)
    
