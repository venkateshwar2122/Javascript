/* from the given array of employee objects increment cse,ece department empoloyees salaries
with 10% , other department wwemployee salaries with 8%
*/

/*
note to increment 10% multipy by "1.1"
since 10/100 = 0.1 , then 1 + 0.1 = 1.1
*/

/*
note to increment 8% multipy by "1.08"
since 8/100 = 0.08 , then 1 + 0.08 = 1.08
*/

let emp = [ { "id":101, "name":"ram", "dept":"cse", "sal":56000 },
            { "id":102, "name":"shyam", "dept":"me", "sal":46000 },
            { "id":103, "name":"mohan", "dept":"ece", "sal":76000 },
            { "id":104, "name":"om", "dept":"eee", "sal":88000 },
            { "id":105, "name":"arpan", "dept":"cse", "sal":534000},
            { "id":106, "name":"rohan", "dept":"ce", "sal":15000 }  ]

            let updateemp = emp.map((obj) => {
                if(obj.dept == "cse" || obj.dept == "ece")
                {
                    return {...obj, "sal":obj.sal*1.1 }        // no quotes in obj.sal*1.01

                }
                else{
                    return {...obj, "sal":obj.sal*1.08}         // no quotes in obj.sal*1.08
                }
            })

console.log(updateemp)

/*output

[
  { id: 101, name: 'ram', dept: 'cse', sal: 61600.00000000001 },
  { id: 102, name: 'shyam', dept: 'me', sal: 49680 },
  { id: 103, name: 'mohan', dept: 'ece', sal: 83600 },
  { id: 104, name: 'om', dept: 'eee', sal: 95040 },
  { id: 105, name: 'arpan', dept: 'cse', sal: 587400 },
  { id: 106, name: 'rohan', dept: 'ce', sal: 16200.000000000002 }
]

*/



