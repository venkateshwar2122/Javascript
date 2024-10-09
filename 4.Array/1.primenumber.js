let a = [2,3,4,5,6,7,8,9]
for(let e of a){
    let f = true
    for(let i=2; i<e ;i++){
        if(e%i==0){
            f = false
            break

        }
    }
    if(f){
        console.log(e)
    }
}