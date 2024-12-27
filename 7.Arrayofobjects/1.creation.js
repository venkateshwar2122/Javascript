//array of objects
let a = [{pid:101, name:"com", price:180},
            {pid:102, name:"kb", price:200},
            {pid:103, name:"mc", price:300}]



//fetching object wise
for(let i =0 ; i<a.length ; i++){
    console.log(a[i])                //{ pid: 101, name: 'com', price: 180 }  { pid: 102, name: 'kb', price: 200 }   { pid: 103, name: 'mc', price: 300 }

}

//fetching property wise
for(let i = 0; i<a.length ;i++){
    console.log(a[i].pid)
    console.log(a[i].name)
    console.log(a[i].price)
}
