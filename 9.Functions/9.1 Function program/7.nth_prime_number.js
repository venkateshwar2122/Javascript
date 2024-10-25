//find nth prime number
//as we know prime number are :2,3,5,7,11,13,17,......
// for n = 1 , output:2
//for n = 2 , output:3
//for n = 3, output:5
//for n = 4 , output:7

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

let count = 0;
let n = 5; // Change this to find the nth prime
let k = 2; // Start from the first prime number

while (true) {
    if (isPrime(k)) {
        count++;
        if (count == n) {
            console.log(k); // Output the nth prime number
            break;
        }
    }
    k++;
}
