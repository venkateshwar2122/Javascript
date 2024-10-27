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
