function isprime(n){
    let c=0,i=2
    while(true){
        let f=true
        if(n<=1){
            f=false
        }
        else{
            for(let j=2;j<i;j++){
                if(i%j==0){
                    f=false
                    break
                }
            }
            if(f){
                c++
                if(c==n){
                    return i
                }
            }
        }
        i++
  
    }
}
console.log(isprime(5))
