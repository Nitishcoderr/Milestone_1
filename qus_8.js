function printTriangle(i){
    for(let row = i;row>=1;row--)
    {
        let rowString = ""
        for(let col =1; col<=row;col++){
            rowString += "*"
        }
        console.log(rowString);
    }
}
printTriangle(5)