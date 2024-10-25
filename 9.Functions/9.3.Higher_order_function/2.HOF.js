/* in the previous program, same code we are writing repeatedly, 
to avoid this we will convert it as a HIGHER ORDER FUNCTION by
separating functionality */

/* HIGHER ORDER FUNCTION is a function , it will take
another function as a argument */

/* in function we normally take argument whgich are elements,
but in HIGHE ORDER FUNCTION we will take function as an argument inside
function itself*/

let area_sq = (s)=> {
    return s*s
}
let area_circle =(r)=>{
    return 3.14*r*r
}
let area_cube=(s)=>{
    return s**3
}

function HOF(a,fun){
    let r = []
    for(let i =0 ;i<a.length ;i++)
    {
        r.push(fun(a[i]))           //function call

    }
    console.log(r)    
}

HOF([3,7,3,4,8] , area_sq)                        //fxn call
HOF([4.78, 5.61, 9.8, 5.1], area_circle)          //fxn call
HOF([4,8,6,3,2],area_cube)                        //fxn call
