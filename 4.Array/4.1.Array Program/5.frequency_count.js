//program to count frequency of each element in a given array
let a = [10,20,10,10,20,30]
let b = [... new Set(a)]                  // "S" is capital in "Set". Note that Set removes dupliactes
let count = 0

for(let i =0 ; i<b.length;i++){
    count = 0                            //reintialise count to zero
    for(let j = 0 ; j<a.length ; j++){
        if(b[i] == a[j]){               //its b of i and a of j ,and not a of i and a of j
            count = count +1
        }
    }
    console.log(b[i],count)              // its b of i
}


// program to display which element was repeated highest number of time in a given array

let a = [10,20,10,10,20,30,20,30,101,40,10]
let b = [... new Set(a)]                      // "S" is capital in "Set"
let count = 0 
let x = 0
let max_freq_ele = b[0]

for(let i =0 ; i<b.length;i++){
    count = 0                              // reintialize count to zero
    for(let j = 0 ; j<a.length ; j++){
        if(b[i] == a[j]){                    //its b of i and a of j ,and not a of i and a of j
            count = count +1
        }
    }
    if(count >= x){
        x = count
        max_freq_ele = b[i]
    }
    
}
console.log(max_freq_ele, x)    //displayed x 
