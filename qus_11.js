function convertFaren(celcius){
    let faren = (celcius * 9/5) + 32;
    return faren;
}
let result = convertFaren(26)
console.log(`F = ${result} `);