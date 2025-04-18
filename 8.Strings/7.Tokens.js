let s = "hello world this is venkatesh"

//sp[lit into characters
console.log(s.split(""))   //no space between quotes

/* o/p : ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " ", "t", "h", "i", "s", " ", "i", "s", " ", "v", "e", "n", "k", "a", "t", "e", "s", "h"]
*/

//take "this" as delimiter
console.log(s.split("this"))

/* o/p:
["hello world ", " is venkatesh"]
*/

//split into substring
console.log(s.split(" ")) //space between quotes

/*o/p:
["hello", "world", "this", "is", "venkatesh"]
*/

//display just first 2 tokens
console.log(s.split(" ",2))

/*o/p:
["hello", "world"]
*/
