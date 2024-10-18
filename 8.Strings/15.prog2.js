//reverse every word in a given string in place

let s = "ab bcav 1234 cd da"
s = s.split(" ")
console.log(s)

for(let i = 0; i<s.length ; i++){
    let x = s[i]
    let r= ""
   for(let j = x.length-1;j>=0;j--){       
        r = r + x[j]
   }
   s[i] = r
}
console.log(s)
