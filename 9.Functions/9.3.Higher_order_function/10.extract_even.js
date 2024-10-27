//extract all even elements from given array

let a = [4,52,7,8,3]
r = a.filter((e)=>{
    if(e%2){
        return e
    }
})
console.log(r)

/* output:
[ 7, 3 ]
*/
