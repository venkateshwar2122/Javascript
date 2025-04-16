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

gcd(a,b) = gcd(a-b,b)
         = gcd(a%b,b)            IMPORTANT

*/

function gcd(a,b){
    while(b!=0){
        r=a%b
        a=b
        b=r
        
    }
    return a
}

console.log(gcd(120,25))          // 5


