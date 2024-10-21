//count number of pairs that will statisfy  a[i]+a[j]=k wherei<j

let a = [5,3,7,2,1,4,6]   // note in array all elements are unique
                          // if elements are not unique then same pair of value can be repeated more than once in count

let k =8
let count = 0

for(let i = 0 ; i<a.length-1 ; i++){

    for(let j =i+1 ;j<a.length ; j++){
        
        if(a[i]+a[j]==k){
            count = count + 1
        }
        
    }
}
console.log(count)

