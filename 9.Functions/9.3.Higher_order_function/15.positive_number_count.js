
/* EXCEPTION: if u initialise the accumulator value with any value , then "ele" and "index" by default WILL NOT START from
2nd element,it will start from first element itself
ex
let a = [10,20,30,40,50]
let r = a.reduce((acc,ele,index)=>{
        console.log(ele)
        console.log(index)
        },128)              //initialised acc value to "128"(any random value)
        
console.log(r)

output:
10        // ele1 is the first element instead of second element
0         //index1 is the index of first element instead of second element
20        //ele2
1         //index2
30
2
40
3
50
4
128    // r value which is equal to "return acc"
*/


//using reduce() find count of positive number in array

let a = [-10,-20,30,40,60,-50]
let r = a.reduce((acc,ele,index)=>{
    if(ele>=0){
        return acc+1      //increment acc if number is positive
    }
    else{
        return acc       // if number is negative then no need to increment
    }
    },0)           //initialised acc value to zero

console.log(r)
