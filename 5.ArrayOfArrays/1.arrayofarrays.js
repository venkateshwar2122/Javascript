let a = [[4,5,6,2], [5,8,7], [7,1,3]]

console.log(a[0])      //[4,5,6,2]
console.log(a[1])      // [5,8,7]
console.log(a[0][3])      //2
console.log(a[2][1])     // 1
console.log(a.length)     //3
console.log(a[0].length)  //4
console.log(a[1].length)  //3


// accessing array elements through nested array

for(let i = 0 ; i<a.length ;i++){         //a.length
    
    for(j=0 ; j<a[i].length ; j++){       //a[i].length
        
        console.log(a[i][j])
        
    }
}

//accesing array elements using spread operator

let a = [[4,5,6,2], [5,8,7], [7,1,3]]

for(let i = 0 ;i<a.length ; i++){
    
    console.log(...a[i])
}


// using forin to access elements from array

for(let i in a){
        for(let j in a[i]){
            
        console.log(a[i][j])
    }
}

// using forof to access elements from array
for(let row of a){
    
    for(let e of row){
        console.log(e)
    }
}
