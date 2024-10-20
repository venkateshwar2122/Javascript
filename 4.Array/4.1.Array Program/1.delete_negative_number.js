//delete all negative number from given array

let a = [1,2,-1,-3,55,-7]

//deletion anamoly
//using while loop
let i=0.         // don't forget to initialise i before using in while loop
while(i < a.length){
    if(a[i]<0){
        a.splice(i,1)
    }
    else{
        i++
    }
}
console.log(a)

//deletion anamoly
//using for loop
for (let i=0 ; i<a.length;   ){   // note that i have not done i++
    
    if (a[i]<0){
        a.splice(i,1)
    }
    else{
        i++
    }
}

console.log(a)
