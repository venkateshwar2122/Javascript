let a = [2,3,4,5,6,7,8,9]
for(let e of a){
    let f = true
    for(let i=2; i<e ;i++){              // agar 2 se e ki bich koi ek bhi factor aaye(means e%i==0) then its not prime..there should be one factor thats itself only(we skipped 1 that why starting with 2)
        if(e%i==0){
            f = false
            break

        }
    }
    if(f){
        console.log(e)
    }
}
