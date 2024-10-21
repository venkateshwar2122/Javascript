//pg48

let s = "java script"
let r = ""

//method1
for(let i = s.length-1; i>=0; i--){           // decrement
    r = r + s[i]                           // r at first place ,  s[i] at second place
}
console.log(r)

//method2
for(let i = 0 ; i<s.length ;i++){                //increment
    r = s[i] + r                                 //s[i] at first place , r at second place
}
console.log(r)
