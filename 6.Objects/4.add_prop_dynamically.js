//add property to object dynamically using variable

let obj = {sid:101 , name:"roshan", age:20, marks:100}

let pn = "place"   // pn is a variable

let newobj = {...obj , [pn]:"hyd"}
console.log(newobj)