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
