//find maximum element in array
//done in first attempt itself

let a = [10,60,20,70,40,50]

let r = a.reduce((acc,ele)=>{
       if(ele>acc){
           acc = ele
       }
       return acc
       })
       
console.log(r)

// output:70

//note that "acc" will be returned only when all the elements of array is iterated. therefore dont confuse with return
//note that "acc" last iteration value will be returned
