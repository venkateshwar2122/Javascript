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
    
    for(let j=i+1; j<a.length ;   ){. //a.length, not doing j++ // note j=i+1 is there, its correct, u should always form a relation between innner loop and outer loop  variable
        
        if(a[i] == a[j]){
            a.splice(j,1)
        }
        else{
            j++
        }
    }
        
}
console.log(a)


//method2 ..mine method using for loop

let a=[1,1,1,1,2,3,67,3,4,4,5,1,2,2,5,9]
for(let i=0;i<a.length-1;i++){
    for(let j=i+1;j<a.length;j++){        // note j=i+1 is there, its correct, u should always form a relation between innner loop variable(j) and outer loop  variable(i)
        if(a[i]==a[j]){
            a.splice(j,1)
            j=j-1
        }
        
    }
}
console.log(a)         //[1,2,3,67,4,5,9]
 
            
