// let var1 = "Raju is a good boy"
// let vowel = 0;
// for(let i = 0 ; i<= var1.length;i++){
//     if(var1[i] == 'a' || var1[i] == 'e'  || var1[i] == 'i' || var1[i] == 'o' || var1[i] == 'u' || var1[i] == 'A'|| var1[i] == 'E'|| var1[i] == 'I' || var1[i] == 'O' || var1[i] == 'U' )
//     {
//         vowel++;
//     }
// }
// console.log(vowel);

// 2nd method

function checkVowel(names){
    let vowel = "aeiouAEIOU"
    let total = 0;
    for(let i = 0;i<=names.length;i++){
        if(vowel.includes(names[i])){
            total++;
        }
    }
    return total;
}
let sen1 = "Raju babu bhaiya shayam"
let result = checkVowel(sen1);
console.log(result);