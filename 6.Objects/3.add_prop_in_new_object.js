//now from existing object take all data and add it to new object, andc also add new property
//called "place" in new object and update age to 25 in new object

let obj = { sid:101, name:"amar", age:20, dept:"cse", marks:85}

let newobj = {...obj, place:"hyd",age:25}
console.log(newobj)
console.log(obj) //it will not modify the original object

