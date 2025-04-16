/* 
❓ Is 0 a factor of 12?
👉 No, 0 is not a factor of 12.

 thats why in below loop we are initializing i with 1 and not 0
 */


let count = 0
let n=12
for(let i =1 ; i<=n ; i++){        
    if(n%i==0){
        count = count +1
    }
}
console.log(count)
