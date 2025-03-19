A closure is a feature in JavaScript where a function retains access to its outer scope (lexical scope) even after the 
outer function has finished executing.

In simpler terms:
✅ A closure gives a function access to variables from its parent scope, even after the parent function has closed.

🔍 Why Are Closures Important?
They help in data encapsulation.
They are widely used in callback functions, event handlers, and module patterns.
Closures are crucial for creating private variables in JavaScript.


🧩 Example 1: Basic Closure


function outerFunction() {
    let outerVar = "I'm from the outer scope!";

    function innerFunction() {
        console.log(outerVar); // ✅ Accesses outerVar even after outerFunction is done
    }

    return innerFunction; // Returning the inner function
}

const closureExample = outerFunction(); // outerFunction executes, but innerFunction is returned
closureExample(); // Outputs: "I'm from the outer scope!"



🔍 Step-by-Step Breakdown
outerFunction() is called, creating the variable outerVar.
The innerFunction is returned — this is the closure.
Even though outerFunction() has finished executing, the innerFunction still remembers the value of outerVar due
to closure behavior.

________________________________________________

Key Takeaways
✅ A closure is created whenever a function is returned from another function.
✅ Closures allow functions to remember and access variables from their lexical scope.
✅ Closures are widely used for private variables, event handlers, and callback functions.
✅ Using let in loops often avoids closure-related bugs.
______________________________________________________________
 Interview Tip
If asked, "How do you create a closure?" —
Answer: "A closure is created when a function retains access to variables from its outer scope, even after
that outer scope has finished execution."

