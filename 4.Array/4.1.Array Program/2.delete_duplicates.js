// delete all duplicates numbers from a given array

let a=[1,2,3,3,4,4,5,1,2,2,5]

//deletion anamoly
//method1 using 2 while loop

let i = 0 , j=0
while(i<a.length-1){   // a.length-1 because 'i'has to reach till second last element only
    j=i+1
    
     while(j < a.length){ //a.length because 'j' has to reach till last element
          if ( a[i] == a[j]){
              a.splice(j,1)
          }
          else{
              j++
          }
     }
i++
}
console.log(a)

//deletion anamoly
//method2 using 2 for loop


for (let i=0 ; i<a.length-1 ; i++){  // a.length-1, i++
    
    for(let j=i+1; j<a.length ;   ){. //a.length, not doing j++
        
        if(a[i] == a[j]){
            a.splice(j,1)
        }
        else{
            j++
        }
    }
        
}
console.log(a)
    

            
