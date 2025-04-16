function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


/*
QUE. explain each iteration of recursion, how it is getting traced back upwards


ChatGPT said:
Let's break down recursion with a step-by-step tracing of each iteration to understand how the recursion works and how it 
eventually "traces back upwards."

We'll use the Fibonacci function and call fibonacci(5) as an example:

Fibonacci Function Recap:

javascript
Copy
Edit

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

Example Call: fibonacci(5)
Step-by-Step Trace:
Initial Call:
javascript
Copy
Edit
fibonacci(5)
Since 5 > 1, we enter the else block and make two recursive calls:

javascript
Copy
Edit
fibonacci(4) + fibonacci(3)

Call to fibonacci(4):

javascript
Copy
Edit
fibonacci(4)
Again, 4 > 1, so we do:

javascript
Copy
Edit
fibonacci(3) + fibonacci(2)

Call to fibonacci(3):

javascript
Copy
Edit
fibonacci(3)
Again, 3 > 1, so we do:

javascript
Copy
Edit
fibonacci(2) + fibonacci(1)

Call to fibonacci(2):

javascript
Copy
Edit
fibonacci(2)
Again, 2 > 1, so we do:

javascript
Copy
Edit
fibonacci(1) + fibonacci(0)

Call to fibonacci(1):

javascript
Copy
Edit
fibonacci(1)
This hits the base case, so it returns 1.

Call to fibonacci(0):

javascript
Copy
Edit
fibonacci(0)
This hits the base case, so it returns 0.

Now, we have the results of fibonacci(1) and fibonacci(0).

Now, we trace back upwards:
Returning from fibonacci(2):

javascript
Copy
Edit
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
Returning from fibonacci(3):

javascript
Copy
Edit
fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
Returning from fibonacci(4):

javascript
Copy
Edit
fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
Returning from fibonacci(5):

javascript
Copy
Edit
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
Final Output:
The result of fibonacci(5) is 5.

Visual Representation of the Call Stack:
Let’s represent the calls as a tree:

markdown
Copy
Edit
fibonacci(5)
  ├─ fibonacci(4)
  │    ├─ fibonacci(3)
  │    │    ├─ fibonacci(2)
  │    │    │    ├─ fibonacci(1) = 1
  │    │    │    └─ fibonacci(0) = 0
  │    │    └─ fibonacci(1) = 1
  │    └─ fibonacci(2)
  │         ├─ fibonacci(1) = 1
  │         └─ fibonacci(0) = 0
  └─ fibonacci(3)
       ├─ fibonacci(2)
       │    ├─ fibonacci(1) = 1
       │    └─ fibonacci(0) = 0
       └─ fibonacci(1) = 1
Key Points:
Each recursive call adds a new layer to the call stack.

When a base case is reached (fibonacci(0) or fibonacci(1)), the result is returned, and the recursion "unwinds" or "traces back" upwards.

As the recursion unwinds, each call uses the results of its sub-calls to compute the Fibonacci number for that level.

Performance Note:
This approach leads to exponential time complexity O(2^n) because of repeated calculations. For example, fibonacci(2) is recalculated multiple times, which can be inefficient for larger numbers.
