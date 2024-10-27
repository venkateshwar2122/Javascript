/*The reduce() method in JavaScript is used to iterate over an array and accumulate a single value based on a callback function. 
It’s powerful for scenarios where you need to combine all elements of an array into a single result
(e.g., sum, product, average, or more complex transformations).
*/

/* to get result as a single value only based on sum functionality we will use  reduce()
syntax:

let r = arr.reduce((accumulator,ele,index,arr)=>{
                      stat1
                      statn

                      return acc
                      }initial_value_of_accumulator)


note that initial_value_of_accumulator is optional, if u want to initialise the value of acc then u can use.
But by default accumulator will take the first element value.
*/



/*  reduce() returns only single value, that is accumulators's value in the end

for ex:

let a = [1,2,3,4,5]

let r1 = a.reduce((acc,e)=>{
        return acc
})
console.log(r1)

output:
1
in above code accumulaor value by default is first element of array



NOTE : a return statement is must with accumulator value otherwise it will be undefined
forex:
let a = [1,2,3,4,5]

let r1 = a.reduce((acc,e)=>{
                                      // no return acc
})
console.log(r1)

output:
undefined
*/


/* understand iteration of  reduce()
note : i have not done "return acc"
let a = [10,20,30,40,50]

let r1 = a.reduce((acc,e,index,arr)=>{
        
        console.log(acc)
        console.log(e)
        console.log(index)
        console.log(arr)
                                      // no "return acc" i have done here
       
})
console.log(r1)

output:
10                             // acc1...... by default acc will take first element value in first iteration
20                             // ele1......ele default value will always start with second elemnt of array
1                              // index1......index default value will always be "second element index value in array"
[ 10, 20, 30, 40, 50 ]         //array1.... aray itself
undefined                     // acc2........since we have not done "return acc " 
30                            //ele2
2                             //index2
[ 10, 20, 30, 40, 50 ]        //array2
undefined
40
3
[ 10, 20, 30, 40, 50 ]
undefined                    //acc4 accumulator value at last iteration
50
4
[ 10, 20, 30, 40, 50 ]
undefined                    // VALUE OF r1 AT LAST, since r1 contains last returned value of accumulator 

*/




/* with "return acc"

let a = [10,20,30,40,50]
let r1 = a.reduce((acc,e,index,arr)=>{
        
        console.log(acc)
        return acc
       
})
console.log(r1)

output:
10       //acc1......accumulator will take first element of array as default value......acc's fist iteration
10       //acc2...... since we are return same acc value without manipulating it......acc's 2nd iteration
10       //acc3......same as above
10       //acc4........same as above
10        // THIS is "r1" VALUE......since r1 value holds the accumulator last returned value

*/

/*

let a = [10,20,30,40,50]


let r1 = a.reduce((acc,e,index,arr)=>{
        
       console.log(acc)
       return acc+1
         
       
})
console.log(r1)

output:
10       //acc1
11       //acc2
12       //acc3
13       //acc4
14       // "r1" value..r1 value holds the last returned value of acc . Note that "console.log(acc)" is above "return acc+1"

*/


//note that always use "return" with "acc" only,if not then there is no use of using reduce()
//acc is like a container which holds value according to certain condition after each iteration


/* EXCEPTION: if u initialise the accumulator value with any value , then "ele" and "index" by default WILL NOT START from
2nd element,it will start from first element itself
ex
let a = [10,20,30,40,50]
let r = a.reduce((acc,ele,index)=>{
        console.log(ele)
        console.log(index)
        },128)              //initialised acc value to "128"(any random value)
        
console.log(r)

output:
10        // ele1 is the first element instead of second element
0         //index1 is the index of first element instead of second element
20        //ele2
1         //index2
30
2
40
3
50
4
128    // r value which is equal to "return acc"
*/
