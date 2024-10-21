//shift all negative number to begnning of array
//pg22

let a = [1,-2,-3,4,5,-6,7,-8]

let i = 0      // pointer to track non-negative intger
for(let j =0 ; j<a.length ;j++){
    if(a[j]<0){
        a.splice(i, 0 ,a.splice(j,1)[0]) // here we are shifting negative integer to right, note we are not swapping
        i++
    }
}
console.log(a)
