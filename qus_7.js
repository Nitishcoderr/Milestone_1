let cartItem = ["Mobile","Laptop","Mobile","Earphone","Bags","Notebook","Mobile","Earphone"]
let uniqueItem = [];

for(let i = 0;i<cartItem.length;i++){
    if(!uniqueItem.includes(cartItem[i])){
        uniqueItem.push(cartItem[i])
    }
}
console.log(uniqueItem);