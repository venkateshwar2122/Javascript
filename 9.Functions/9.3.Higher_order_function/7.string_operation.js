// convert every string first letter as capital and all other letter in lower case in a given array of strings

let a = ["heLLO", "gOOD" , "fiVe", "weLCOME"]

let r = a.map((e)=> {

        e = e[0].toUpperCase() + e.slice(1,e.length).toLowerCase()
        return e 
    } )

console.log(r)

/* output
[ 'Hello', 'Good', 'Five', 'Welcome' ]

*/
