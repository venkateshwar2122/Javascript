/* understand how iteration is happpenming in MAP:
program is to increment even index element with 5

let a = [7,3,8,4,5,6]
let r = a.map((e, index) => {
            if(index%2 == 0)
            {
            return e+5
            }
        })

console.log(r)

*/

/* output :
[ 12, undefined, 13, undefined, 10, undefined ]

 why this undefdined is coming ? think
 */

 // program to increment all even index element by 5

 let a = [7,3,8,4,5,6]
 let r = a.map((e, index) => {
            if(index%2 == 0){
                return e+5
            }
            else{
                return e
            }

        })
console.log(r)

/* output:
[ 12, 3, 13, 4, 10, 6 ]
*/


