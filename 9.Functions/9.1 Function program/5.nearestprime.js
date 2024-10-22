//display nearest prime number 
/*
testcases:
n=12 nearest prime is 13
n=15 nearest prime is 17
n=19 nearest prime is 19 itself
*/

function isprime(n){
    let flag = true
    if(n<=1){
        flag=false
    }
    else{
        for(let i=2 ;i<n;i++){
            if(n%i==0){
                flag=false
                break
            }

        }
    }
    return flag
}


let n = 15
while(true){
    if(isprime(n)){
        console.log(n)
        break
    }
    else{
        n++
    }
}



