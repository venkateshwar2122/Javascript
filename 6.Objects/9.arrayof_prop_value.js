// create object using given array of property and array of value

let prop = ["sid", "name", "dept", "marks"]
let value = [101, "venkatesh", "cse", 100]

//method 1
let obj = {}
for(let i = 0 ;i<prop.length; i++){
    obj[prop[i]] = value[i]  /*The square brackets [] in obj[prop[i]] are used for bracket 
                                 notation to access object properties dynamically.
                                This allows you to use a variable
                               (in this case, prop[i]) to specify which property you want
                                to access or set the object.*/
}
console.log(obj)

//method 2

let obj2 = {}
for(let i = 0; i<prop.length ; i++){
    obj2 = {...obj, [prop[i]] : value[i]}
}

console.log(obj2)