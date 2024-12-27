//find 2nd largest element in the array

let a =[860,900,800,700,850,100,200,300,400,500]

let max1 = a[0]
let max2 = -1

for(let i=0; i<a.length; i++){
    
    if(a[i] > max1){
        max2 = max1  // remember sequence,first max2 = max1 then max1 = a[i]
        max1 = a[i]
        
    }
    else if(a[i]>max2 && a[i]!= max1){
        max2 = a[i]
    }
}

console.log(max2)
