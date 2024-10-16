//display product details whose price is greater then 25000
let a = [{pid:101, name:"com", price:180},
    {pid:102, name:"kb", price:200},
    {pid:103, name:"mc", price:26300}]

for(let i=0; i<a.length ;i++){
    if(a[i].price > 25000){
        console.log(a[i].pid)
        console.log(a[i].name)
        console.log(a[i].price)
    }
}

//delete product with name "kb"

for(let i =0; i<a.length;i++){
    if(a[i].name == "kb"){
        a.splice(i,1)
    }
}
console.log(a)
