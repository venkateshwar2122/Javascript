//extract all employee detail whose salary greater than 45000

let emp = [ { "id":101, "name":"ram", "dept":"cse", "sal":32000 },
            { "id":102, "name":"shyam", "dept":"me", "sal":46000 },
            { "id":103, "name":"mohan", "dept":"ece", "sal":16000 },
            { "id":104, "name":"om", "dept":"eee", "sal":88000 },
            { "id":105, "name":"arpan", "dept":"cse", "sal":4000},
            { "id":106, "name":"rohan", "dept":"ce", "sal":15000 }  ]

            let updateemp = emp.filter((obj) => {
                if(obj.sal>45000)
                {
                    return obj

                }
               
            })

console.log(updateemp)

/*OUTPUT:

[
  { id: 102, name: 'shyam', dept: 'me', sal: 46000 },
  { id: 104, name: 'om', dept: 'eee', sal: 88000 }
]

*/
