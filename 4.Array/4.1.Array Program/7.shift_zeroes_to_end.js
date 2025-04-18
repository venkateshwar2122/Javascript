//shift all zeroes to end in a given array

//m1(sir method, time complexity 0(n)  ).
//if u have to arrange in relative order
//output :1,2,3,4,5,6,7,0,0,0,0,0
//pg21

let a = [0,0,1,2,3,4,0,0,5,6,0,7]

let i =0        // pointer to track INDEX0,INDEX1,INDEX2,AND SO ON

for(let j=0; j<a.length ;j++){
    if(a[j]!=0){
        a.splice(i,0,a.splice(j,1)[0])  // here we are shifting zeroes to end ,not swapping
        i++
    }
}
console.log(a)

/* NOTE: SPLICE RETURNS ARRAY:

a.splice(j, 1)[0]
🔍 What does this do?
a.splice(j, 1) removes 1 element from the array a at index j.

splice returns an array of the removed elements (in this case, an array with just one element).

[0] accesses the first element of that returned array — basically extracting the removed value.*/





//m2. if relative order is not an issue
//output : 7,6,5,4,3,2,1,0,0,0,0
//mine method
//time complexity 0(n^2)

let a = [1,0,2,3,4,0,0,5,6,0,7]

for(let i = 0 ; i<a.length ; i++){
    
    if(a[i]==0){
                for(let j =i+1 ;j<a.length ; j++){
                    
                    if(a[j]!=0)
                    {
                       a.unshift( a.splice(j,1)[0] )
                    }
                }
    }
}
console.log(a)





