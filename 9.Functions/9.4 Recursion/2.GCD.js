/* recursive function
    1) a , b=0
    2) f(b,a%b) , b!=0

    */

function gcd(a,b){
    if(b==0){
        return a
    }
    else{
        return gcd(b,a%b)
    }
}

console.log(gcd(12,27))

//output : 3
