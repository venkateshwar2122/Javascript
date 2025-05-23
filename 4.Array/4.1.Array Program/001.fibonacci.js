/* 
🔢 Fibonacci Series Example:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

*/

let a =-1, b = 1, sum = 0
let n =12
for(i =1 ; i<=n ;i++){
    sum=a+b
    console.log(sum)
    a = b
    b = sum
}


//    MY CODE :-

let a= 0, b=1
let n=10
let sum=0

console.log(a)
console.log(b)

for(i=3;i<=10;i++){          /* STARTING WITH i=3, because 0 and 1 already printed */
    sum=a+b
    console.log(sum)
    a=b
    b=sum
    
}

/* output:
0
1
1
2
3
5
8
13
21
34
*/
