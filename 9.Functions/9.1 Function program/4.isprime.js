function isprime(n){
  
    let flag = true
    if(n<=1)
    {
        flag=false
    }
    else{
        for(let i=2 ;i<n;i++)
        {
            if(n%i==0)
            {
                flag=false
                break
            }

        }
    }
    return flag
}

console.log(isprime(11))
console.log(isprime(12))
