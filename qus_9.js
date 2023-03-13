function toCheckDivisible(numbers){
    for(let i = 0 ; i <= numbers.length;i++){
        if(numbers[i] % 3 !== 0 || numbers[i] % 2 == 0){
            continue;
        }
        console.log(numbers[i]);
    }
}
let num = [2,4,6,8,9,12,15,18,21]
toCheckDivisible(num)

