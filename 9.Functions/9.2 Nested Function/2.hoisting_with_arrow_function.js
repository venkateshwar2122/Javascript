// note that fxn defined with "fxn expression" or "arrow function" ,
//cannot be hoisted.
// if u try to hoist in them u will get error

console.log(add(10,20))   // fxn call

let add = (a,b)=>{               //arrow fxn
    return a+b
}

// u willl get error because u cannot use hoisting with arrow fxn or fxn expression
