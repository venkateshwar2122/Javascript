/*
method 1

let a = ["abc", "aba", "abc", "aaa"];

let r = a.filter((e) => {
    let r = ''
    for (let i = 0; i < e.length; i++) {
        r = e[i] + r
    }
    if(e==r){
        return true
    }
    else { 
        return false
    }
})

console.log(r);

*/



/* method 2

let a = ["abc", "aba", "abc", "aaa"];

let r = a.filter((e) => {
    let r = e.split(''). reverse ().join('')
    
    if(e==r){
        return true
    }
    else { 
        return false
    }
})

console.log(r);

*/

/* explanation of method 2.

let r = e.split("").reverse().join("");

above code meaning:-

For each string e, we reverse it to see if it is a palindrome:

e.split("") splits the string e into an array of individual characters. 
For example, "aba".split("") gives ["a", "b", "a"].


.reverse() reverses the array of characters. 
For example, ["a", "b", "a"].reverse() gives ["a", "b", "a"].


.join("") joins the reversed array back into a string. 
For example, ["a", "b", "a"].join("") gives "aba".

*/
