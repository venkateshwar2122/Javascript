1. What are the possible ways to create objects in JavaScript?

2. What is the difference between and operators?

3. What are arrow functions?

4. What is a higher order function?

AHTSI

5. What is a pure function?
6

. What is the difference between let, var and const?
7

What is the Temporal Dead Zone?

8. What is Hoisting?

9. What are closures?

10. What is scope in javascript?

11. What are the differences between cookie, local storage and session storage?

12. What are the three states of promise?

13. What is a callback function?

14. What are template literals?

15. What is a strict mode in javascript?

16. What is null value?

17. What are events?

18. What is the use of the preventDefault method?

19. What is the use of the stopPropagation method?

20. What is the use of setTimeout?

21. What is the use of setInterval?

22. What is the purpose of JSON.stringify?

23. How do you redirect new page in javascript?

24. What are the string methods available in Regular expression?

25. Syntax of conditional operator(ternary operator) in javascript.

26. Example for rest parameter.

27. Combine two arrays using a spread operator.

28. Explain Implicit Type Conversion in javascript.

29. Is javascript a statically typed or a dynamically typed language?

30. Explain "this" keyword.

31. What is the difference between DOM and BOM?

32. List DOM methods to access html element references.

33. Difference between for...in & for..of

34. List a few ES6+ features.

35. Difference b/w object & JSON.

36. Difference b/w innerHTML & innerText.

37. Difference b/w slice & splice methods.

38. Differentiate b/w map() and filter() with syntax.

39. How do you validate email in javascript.

40. What is the difference b/w exec() and test() methods in javascript.




























1.  Ways to Create Objects in JavaScript:
a) Using Object Literals:
javascript
Copy code
let obj = { name: "John", age: 30 };
console.log(obj);

b)Using Object.create():  *
javascript
Copy code
let prototype = { greet: function() { console.log("Hello!"); } };
let obj = Object.create(prototype);
obj.greet();

c)Using Classes:
javascript
Copy code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person2 = new Person("Jane", 25);
console.log(person2);



2> Difference Between == and ===:
== allows type coercion.
=== does not allow type coercion.
Example:

javascript
Copy code
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict comparison)



3> 3. Arrow Functions:
Arrow functions are a concise way to write functions and do not have their own this.

Example:

javascript
Copy code
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8



4> . Higher-Order Functions:  *
Functions that take other functions as arguments or return functions.

Example:

javascript
Copy code
function applyOperation(a, b, operation) {
   return operation(a, b);
}
let result = applyOperation(5, 3, (x, y) => x + y);
console.log(result); // 8


5> 5. Pure Function:
A function with no side effects and consistent output for the same input.

Example:

javascript
Copy code
function square(num) {
    return num * num;
}
console.log(square(4)); // 16
console.log(square(4)); // 16 (always the same)


6> Difference Between let, var, and const:
a) var:
Function-scoped.
javascript
Copy code
var x = 10;
if (true) {
    var x = 20; // Same variable
}
console.log(x); // 20

b) let:
Block-scoped.
javascript
Copy code
let y = 10;
if (true) {
    let y = 20; // Different variable
}
console.log(y); // 10

c) const:
Block-scoped and immutable.
javascript
Copy code
const z = 10;
// z = 20; // Error
console.log(z); // 10



Here’s a detailed explanation of each question with examples:

1. Ways to Create Objects in JavaScript:
Using Object Literals:
javascript
Copy code
let obj = { name: "John", age: 30 };
console.log(obj);
Using Constructor Functions:
javascript
Copy code
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("John", 30);
console.log(person1);
Using Object.create():
javascript
Copy code
let prototype = { greet: function() { console.log("Hello!"); } };
let obj = Object.create(prototype);
obj.greet();
Using Classes:
javascript
Copy code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person2 = new Person("Jane", 25);
console.log(person2);
2. Difference Between == and ===:
== allows type coercion.
=== does not allow type coercion.
Example:

javascript
Copy code
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict comparison)
3. Arrow Functions:
Arrow functions are a concise way to write functions and do not have their own this.

Example:

javascript
Copy code
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8
4. Higher-Order Functions:
Functions that take other functions as arguments or return functions.

Example:

javascript
Copy code
function applyOperation(a, b, operation) {
   return operation(a, b);
}
let result = applyOperation(5, 3, (x, y) => x + y);
console.log(result); // 8
5. Pure Function:
A function with no side effects and consistent output for the same input.

Example:

javascript
Copy code
function square(num) {
    return num * num;
}
console.log(square(4)); // 16
console.log(square(4)); // 16 (always the same)
6. Difference Between let, var, and const:
var:
Function-scoped.
javascript
Copy code
var x = 10;
if (true) {
    var x = 20; // Same variable
}
console.log(x); // 20
let:
Block-scoped.
javascript
Copy code
let y = 10;
if (true) {
    let y = 20; // Different variable
}
console.log(y); // 10
const:
Block-scoped and immutable.
javascript
Copy code
const z = 10;
// z = 20; // Error
console.log(z); // 10



7. Temporal Dead Zone (TDZ):
The phase where a variable is declared but not initialized.

Example:

javascript
Copy code
console.log(x); // ReferenceError
let x = 10;


IN DETAIL :-

The Temporal Dead Zone (TDZ) in JavaScript refers to the period of time during which a variable declared with let or
  const cannot be accessed before its declaration in the code. While the variable is in the TDZ, attempting to access 
  it will throw a ReferenceError.

Explanation:
Hoisting Behavior:

Variables declared using var are hoisted and initialized to undefined.
Variables declared with let and const are also hoisted but remain uninitialized until the execution reaches the variable
declaration.
  
Temporal Dead Zone:

The TDZ starts from the beginning of the enclosing scope (block or function) until the line where the variable is
declared and initialized.
During this period, accessing the variable is not allowed.
Example:
javascript
Copy code
console.log(a); // undefined (var is hoisted and initialized to undefined)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;

Key Points:
Block Scope: let and const are block-scoped, so the TDZ applies within their enclosing block.
Variable Initialization: The TDZ ends only when the variable is declared and assigned a value.
Best Practice: Always declare variables at the beginning of their scope to avoid unintended TDZ-related errors.
Why TDZ Exists:
The TDZ helps prevent subtle bugs by ensuring that variables are not used before they are properly declared and initialized, enforcing cleaner and more predictable code behavior.


8. Hoisting (STUDIED)
JavaScript moves declarations to the top of their scope.

Example:

javascript
Copy code
console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError
let y = 20;

