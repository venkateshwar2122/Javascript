//to search substring in main string
let s = "hello to all"
console.log(s.includes("t"))
console.log(s.includes("to"))
console.log(s.includes("toooo"))


//searching index of substring

console.log(s.indexOf("to"))
console.log(s.indexOf("ll"))

//to find last index of repeated substring

console.log(s.lastIndexOf("ll"))

//if substring not present it will return -1
console.log(s.indexOf("welcome"))


