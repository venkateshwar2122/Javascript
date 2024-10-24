// define a function that will take array as argument, it need to return a 
//new array that contains only even elements


let fun = (a) =>{
    let r = []
    for(let e of a){    //element "e" of array "a"
        if(e%2==0){
            r.push(e)
        }
    }
    return r
}
console.log(fun([2,3,4,5,6,7,89]))
