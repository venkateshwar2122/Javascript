//to check every element in given array satisfies given criteria or not. it return either true or false

/* The every() method is a powerful tool in JavaScript that allows you to determine if every element in an 
array meets a specific condition. It takes a callback function as an argument and returns a 
  boolean value: true if all elements pass the test, false otherwise.
*/ syntax
let r = array.every(element, index, array)=>{
        return condition
       })

//que1. check all elemn=ent in array are even or not

let numbers = [2, 4, 6, 8, 10];
let areAllEven = numbers.every((number) => {
  return number % 2 === 0;
});
console.log(areAllEven);

//output:true



//que.2 check that all elements in array are positive or not
let numbers = [2,-4, 6, 8, 10];

let areAllpositive = numbers.every((number) => {
  return number>=0;
});

console.log(areAllpositive);

//output:false
