/* recursive function
        1) 1 , n=0 
        2)n*f(n-1)  , n>0
*/
        

function fact(n){
    if(n==1){
        return 1
    }
    else{
        n = n*fact(n-1)
        return n
    }
}

console.log(fact(5))
