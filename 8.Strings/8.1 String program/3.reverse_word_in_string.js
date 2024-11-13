//pg61
//reverse every word in a given string in place

//sir method
let s = "abc 1234 cabc abcd"
s = s.split(" ")     /*here split is dividing string according to space(" ")and stores into an array as a result each word of string is now an array element */
let r =""          /* R IS STRING DATATYPE */

for (let i=0;i<s.length;i++){


    for(let j=0;j<s[i].length;j++){
        
         r = s[i][j]+ r      /*  r= S[I][J] +R  */  
    }
    s[i]=r
    r = ""   /* reinitialising r */
   
}
console.log(s.join())          /* join() converts array back to string and join array elements by commma)  */






//my method 1
let s = "ab bcav 1234 cd da"
s = s.split(" ")   /*here split is dividing string according to space(" ")and stores into an array as a result each word of string is now an array element */
console.log(s)

for(let i = 0; i<s.length ; i++){
    let x = s[i]
    let r= ""
   for(let j = x.length-1;j>=0;j--){       
        r = r + x[j]
   }
   s[i] = r
}
console.log(s.join())     /* join() converts array back to string and join array elements by commma)  */



//My method 2
let s = "abc 1234 cabc abcd"
 s = s.split(" ")   /*here split is dividing string according to space(" ")and stores into an array as a result each word of string is now an array element */
let r =" "

for (let i=0;i<s.length;i++){
    for(let j=0;j<s[i].length;j++){
        
         r = s[i][j]+ r                /*  r= S[I][J] + r */  
    }
    s[i]=r
    r=""
   
}
console.log(s.join())   /* join() converts array back to string and join array elements by commma)  */

