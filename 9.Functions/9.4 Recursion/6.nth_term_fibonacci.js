//calculate nth term in fibonaci sequence
//pg98

/* CONCEPT:-
IN FIBONACCI,
FIRST NUMBER IS ALWAYS "0"
SECOND NUMBER IS ALWAYS "1"
*/

/* recursive function:
    1) 0 , n=1   
    2) 1 , n=2
    3) f(n-1) + f(n-2) , n>2

    */

function fun(n){
    if(n==1){
        return 0
    }
    else if(n==2){
        return 1
    }
    else{
        return fun(n-1)+fun(n-2)
    }

}

console.log(fun(7))

/*
output :8

beacuse fibonacci sequence:0,1,1,2,3,5,8,13......
in above 7th term of sequence is "8"
*/
