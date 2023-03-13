const discountPer = (originalPrice,discountPrice) =>{
    const discountAmount =  (originalPrice - discountPrice);
    const discountPercentage = (discountAmount/originalPrice) *100;
    return Math.round(discountPercentage * 100) / 100;

}
let final = discountPer(100,33.3)
console.log(`Final price after Discount is ${final}rs`);