//the number should be both nearest prime and paindrome
//same code, just add && condition
function ispalindrome(n){
    
    let t = n ,r = 0
    while(n!=0){
    r = r*10 + n%10
    n = parseInt(n/10)
    }
    return t==r
}

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


let n = 12
while(true){
    if(isprime(n) && ispalindrome(n)){       // &&ispalindrome(n)
        console.log(n)
        break
    }
    else{
        n++
    }
}


