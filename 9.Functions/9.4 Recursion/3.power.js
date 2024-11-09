//define a recursive function to calculate a power b (a**b)
/* recursive function
    1) 1, b=0
    2) a*f(a,b-1) , b>0

    */

function fun(a,b){
    if(b==0){
        return 1
    }
    else{

        return a*fun(a,b-1)         // see "a" is outside fun() also

    }
}

console.log(fun(2,3))

//output:8
