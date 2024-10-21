//pg59
//calculate weight of give string
//abcd = a+b+c+d = 1+2+3+4= 10
//bc = b+c  = 2+3 = 5
//cd = c+d = 3+4= 7

let s = "dacaad"
let w=0
for(let i =0 ;i<s.length ;i++){
    w = w + s.codePointAt(i) - 96
}
console.log(w)
