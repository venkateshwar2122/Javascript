//pg64
/* QUE:   display frequency count of every character in the given string */


/* mine method
step 1 :find set ( only unique element)
step 2: two forloop for frquency count

timecomplexity ;O(n^2)

*/

/* refer previous object concept program to understand iteration in this program */

/* sir method to find frequency count using object concept
time complexity : O(n)
*/

let s ="gdsfggdsgerfdfd"
obj={}

for(let i=0;i<s.length;i++){
    if(obj[s[i]]==undefined){
        obj[s[i]] = 1
    }
    else{
        obj[s[i]] =obj[s[i]] + 1
    }
}
console.log(obj)

/* output :
{ g: 4, d: 4, s: 2, f: 3, e: 1, r: 1 }
*/
