let a = [101,201,301,401,501,601,501,801,901,201,501,567]

console.log(a.includes(50))  //false
console.log(a.includes(101))  //true
console.log(a.includes(101,3))    //false , beacuse it starts checking from 3rd index onwards
console.log(a.indexOf(501)) // 4             // it gives index of first occurence
console.log(a.lastIndexOf(501)) //  10        // it gives index of last occurence
console.log(a.includes(201,4)) //true
