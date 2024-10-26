/* understand how iteration is happening in MAP:

let a = [7,8,4,5,6]
let r = a.map((e) => {
         console.log(e)
         })
console.log(r)

*/

/* OUTPUT:
7
8
4
5
6
[undefined, undefined, undefined, undefined, undefined ]

// undefined is coming because we have written return statement 
*/

// program to calculate factorial of every elemnt in array

let a = [7, 8 ,4,5,6]
let r = a.map((e)=>{
        let f = 1
        for(let i = 1; i<=e ;i++){
            f=f * i
        }
        return f
})
console.log(r)

/*  OUTPUT:
[ 5040, 40320, 24, 120, 720 ]
 */
