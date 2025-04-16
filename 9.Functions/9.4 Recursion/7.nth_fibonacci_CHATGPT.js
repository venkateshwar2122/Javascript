function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(5))               // OUTPUT: 5

/*
What does fibonacci(5) = 5 actually mean?

Let me explain it in the real meaning of Fibonacci numbers:

📚 Fibonacci Sequence Basics:
The Fibonacci series is:

Copy
Edit
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
These numbers are formed like this:

fibonacci(0) = 0

fibonacci(1) = 1

fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1

fibonacci(3) = 1 + 1 = 2

fibonacci(4) = 2 + 1 = 3

fibonacci(5) = 3 + 2 = 5

fibonacci(6) = 5 + 3 = 8, and so on...

*/

/* RECURSION TRESS

fibonacci(5)
├── fibonacci(4)
│   ├── fibonacci(3)
│   │   ├── fibonacci(2)
│   │   │   ├── fibonacci(1) → 1
│   │   │   └── fibonacci(0) → 0
│   │   └── fibonacci(1) → 1
│   └── fibonacci(2)
│       ├── fibonacci(1) → 1
│       └── fibonacci(0) → 0
└── fibonacci(3)
    ├── fibonacci(2)
    │   ├── fibonacci(1) → 1
    │   └── fibonacci(0) → 0
    └── fibonacci(1) → 1

*/



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
*/


/* QUE2> FACTORIAL VS FIBONACCI !!      SINGLE RECURSION VS DOUBLE RECURSION !!

SINGLE RECURSION I AM ABLE TO UNDERSTAND LIKE FACTORIAL. BUT DOUBLE RECURSION LIKE IN FIBONACCI I AM NOT ABLE TO UNDERSTAND


ChatGPT said:
I completely understand your concern! Let's break down double recursion in the context of the Fibonacci sequence and how it differs from single recursion (like factorial). I’ll explain it step-by-step and make sure it’s clear.

🔍 Recap of Single Recursion (like Factorial):
When you calculate something like the factorial of a number (n!), you use single recursion:

Factorial Definition:
n!=n×(n−1)!
Where the base case is:
0!=1

Example (Factorial):
javascript
Copy
Edit
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
When you call factorial(5), the recursive calls look like this:

matlab
Copy
Edit
factorial(5) 
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * (4 * (3 * (2 * (1 * factorial(0))))))
= 5 * (4 * (3 * (2 * (1 * 1))))) = 120
Single recursion means you keep reducing the problem by one step at a time.

🔍 Understanding Double Recursion (like Fibonacci):
In Fibonacci, we use two recursive calls to break down the problem into two smaller sub-problems.

Fibonacci Formula:
F(n)=F(n−1)+F(n−2)
Where the base cases are:
F(0)=0,F(1)=1

Fibonacci Function:
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

How Double Recursion Works in Fibonacci:
Here, when we call fibonacci(n), we need the sum of the results from two recursive calls:
fibonacci(n - 1)
fibonacci(n - 2)

Let’s trace fibonacci(5) to see how it works step by step.

Call Trace for fibonacci(5):
Call fibonacci(5):

fibonacci(5) calls fibonacci(4) and fibonacci(3).

Call fibonacci(4):

fibonacci(4) calls fibonacci(3) and fibonacci(2).

Call fibonacci(3):

fibonacci(3) calls fibonacci(2) and fibonacci(1).

Call fibonacci(2):

fibonacci(2) calls fibonacci(1) and fibonacci(0).

Call fibonacci(1):

Base case, so return 1.

Call fibonacci(0):

Base case, so return 0.

Now, we can start returning the values back up:

Return from fibonacci(2):

fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1.

Return from fibonacci(3):

fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2.

Return from fibonacci(4):

fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3.

Return from fibonacci(5):

fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5.

Key Points of Double Recursion:
Two recursive calls at each step, which creates a branching structure of function calls.

At each level, the problem is split into two sub-problems (not just one), making it different from factorial where you only reduce by one.

This branching leads to a lot of redundant calls (which is why this method can be inefficient for large numbers).

🧠 Why Does This Happen?
In Fibonacci, you need both the previous and the second previous Fibonacci numbers. That’s why each function call branches into two calls:

To get fibonacci(n-1), we need fibonacci(n-2) and fibonacci(n-3).

To get fibonacci(n-2), we need fibonacci(n-3) and fibonacci(n-4).

This branching nature is why Fibonacci involves double recursion.

Why is it called "Double Recursion"?
It’s because each call to the Fibonacci function triggers two further recursive calls (one for n-1 and one for n-2), instead of just one like in factorial.

Performance Consideration:
As you can see, this method has exponential time complexity (O(2^n)) because each function call splits into two, leading to a lot of duplicate calculations.

Would you like to optimize this with memoization (to store results and avoid redundant calculations) or would you like me to explain it further?
