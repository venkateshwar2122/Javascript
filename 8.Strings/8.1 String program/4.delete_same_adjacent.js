//see pg 62 for detail iteration by iterartion explanation

/* in a given string if two two adjacent character are same then delete both the characters and finally display the resultant string.If there
is no left out cahracters display empty string */

/* TEST CASES:-
input = abbc , output = ac
input = abccba, output = empty string
input = acbccd , output = acbd     
*/

//sir method

/* in whileloop of below code i have done "s.length-1" instead of "s.length"...because....Avoiding Out of Bounds:
inside loop if condition checks s[i] == s[i + 1], so i + 1 needs to be within the bounds of the array.
If i were allowed to go up to s.length, then s[i + 1] would access an element beyond the array’s end, causing an error.
*/

let s = "acbccd"
s=s.split('')
let i =0
while(i<s.length-1){
    if(s[i]==s[i+1]){
        s.splice(i,2)
        i=0
    }
    else{
        i++
    }
}
if(s.length==0){
    console.log("empty string")
}
else{
    console.log(s.join())
}



//my method

/* in forloop of below code i have done s.length-1 instead of s.length...because....Avoiding Out of Bounds:
inside loop if condition checks s[i] == s[i + 1], so i + 1 needs to be within the bounds of the array.
If i were allowed to go up to s.length, then s[i + 1] would access an element beyond the array’s end, causing an error.
*/


let s = 'abccba'                   /* take s = "abbc" and s="acbccd" also to check  other testcases */
s= s.split('')
console.log(s)
for(let i=0;i<s.length-1;  ){              /* because of deletion anamoly i have not done i++ here */  
    if(s[i]==s[i+1]){
        s.splice(i,2)            /* splice give rise to deletion anamoly*/
        i=0               /* initialise i to 0 */
    }
    else{
        i++
    }
    
}
if(s.length==0){
    console.log("empty string")
}
else{
    console.log(s.join())
}

//sir's method 

