/* SHEKHAR SIR CODE (EUCLEDIAN ALGORITHM) */

function gcd(a,b){
    while(b!=0){
        r=a%b
        a=b
        b=r
        
    }
    return a
}

console.log(gcd(120,25))          // 5
____________________________________________________________________________________________

/* STRIVER CODES */

/* 1. BRUTE FORCE */

let a = 20, b = 40;
let gcd = 1;  // initialize gcd to 1

for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}

console.log("GCD is:", gcd);           // GCD is: 20


/*2. Brute force */

let a = 20, b = 40;
let gcd = 1;  // initialize gcd to 1

for (let i = Math.min(a,b) ; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
        break
    }
}

console.log("GCD is:", gcd);            // GCD is: 20


/* 3. OPTIMAL SOLUTION USING EUCLEDIAN ALGO */

/* NOTE:

in below theorem a>b:

gcd(a,b) = gcd(a-b,b)
         = gcd(a%b,b)            IMPORTANT

*/


function gcd(a,b){
    
    while(a>0 && b>0){
        if(a>b){
            a=a%b
        }
        else{
            b=b%a
        }
    } 
    
    // After the loop, either a or b will be 0, and the other will be the GCD.
    if(a==0){
        return b           /* return b*/
    }
    else{
        return a         /* return a*/
    }
}

console.log(gcd(20,40))             // output:20
