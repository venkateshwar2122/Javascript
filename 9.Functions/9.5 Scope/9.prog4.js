/* var variable will be automatically hoisted in the beginning of program, therefore u are gettimhg error
in below code

let a = 10
{
  var a = 202    // hoisted in beginning
}

output: error

/* no error for below code

let a = 10
{
  a=20
  }

  
*/

/* NOTE: local variables having highest priority than globval variables

let a= 10
{
  let a = 20
  console.log(a)

}

output:20

*/

