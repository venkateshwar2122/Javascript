//calculate GCD of array of elements
//pg90


let a = [15,10,25,100,90,165]
let res=a.reduce((acc,e)=>{
    while(e!=0){
        let r = acc%e
        acc=e
        e=r
    }
    return acc
})
console.log(res)

//output:5
