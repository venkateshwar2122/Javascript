//sum of individual digit of given number

/* recursive functon
  1)0  , n=0
  2)n%10 + fun(parseint(n/10))    , n>0
  */

function fun(n){
    if(n==0){
        return 0
    }
    else{
        return n%10 + fun(parseInt(n/10))
    }
}

console.log(fun(123))

//output:6
