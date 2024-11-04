/* you can change var , let variables */

/* allowed
var x = 10
x = 20
x = [4,6,8]

*/

/* u cannot reinitialse const variables. const variables shoul;d be initialised at the time of variable declaration itself */

/* not allowed , it will give typeerror

const a = 7
a = 356
console.log(a)

*/

/* note : reinitaiseation of const is not allowed , but it's modification is allowed */

/* allowed:

const a = [6,8,3,4,6,8]
a[2] = 23
a.push(28)
console.log(a)

output: [6,8,23,4,6,8,28]

*/

/* not allowed : in below code u are reinitaialising a object..it willl give type error


const a = [6,8,3,7,9]
a = [...a , 67]

*/

