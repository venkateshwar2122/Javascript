/*The filter() method in JavaScript is used to create a new array that includes all elements from the original array that 
meet a certain condition specified in a callback function. 
It doesn’t modify the original array but instead returns a new one with only the elements that satisfy the condition.
*/


/*
syntax:-
filterarray = arr.filter((element,index,arr)=>{
                        stat1
                        statn
               return something
              })
*/

/* DIFFERENCE B/W MAP AND FILTER 

let a = [4,52,7,8,3]
let r = a.map((e)=>{                  //MAP
    if(e%2){
        return e
    }
})
console.log(r)

r = a.filter((e)=>{                 //FILTER
    if(e%2){
        return e
    }
})
console.log(r)

OUTPUT:-
[ undefined, undefined, 7, undefined, 3 ]              //MAP's resultant array
[ 7, 3 ]                                               // filter's resultant array

*/


/* CONCLUSION

map(): The resulting array always has the same length as the original array, even if some values are undefined.
filter(): The resulting array can have fewer elements than the original array, containing only those 
elements that satisfy the condition.

*/
  
