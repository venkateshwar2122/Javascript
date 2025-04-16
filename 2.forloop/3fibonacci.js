/* 
🔢 Fibonacci Series Example:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

*/

let a =-1, b = 1, c = 0
let n =12
for(i =1 ; i<=n ;i++){
    c=a+b
    console.log(c)
    a = b
    b = c
}
