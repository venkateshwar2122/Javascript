//seach given element in array ,if found return its index , otherwise return -1
//important

function fun(arr,ele,ind){
    if(arr[ind]==ele){
        return ind
       
    }
    else if(ind == arr.length-1){           //arr.length-1 beacuse we have already checked if condition,
        return -1                              //meaning last element of array is not the searched element then
                                               //only it came to else if condition
    }
    else{
        return fun(arr,ele,ind+1)
    }
}
let arr = [1,7,8,9]
console.log(fun(arr,8,0))

//output:2
