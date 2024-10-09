let obj = {sid:101, name:"aman",age:20,dept:"cse",marks:85}
// method1 to access data
console.log(obj.name, obj.age, obj.marks) //aman 20 85

//method 2 to access data
console.log(obj['sid'], obj['name'], obj['age']) //101 aman 20

//method 3 to access data using for loop
for (let p in obj){
    console.log(obj[p]) // p is variable, output is 101 aman 20 cse 85
}