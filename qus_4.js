let marks = [89,99,88,100,87]
let = greatest = 0;
for(let i = 0;i<marks.length;i++)
{
    greatest = marks[i] >  greatest ? marks[i] : greatest;
}
console.log(`The higheest mark is ${greatest}`);