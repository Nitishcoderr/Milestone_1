function billSpliter(dishPrice, noofpeople) {
  let total = dishPrice * noofpeople;
  let billPerPerson = total / noofpeople;
  return {
    total: total,
    billPerPerson: billPerPerson,
  };
}
let pasta = billSpliter(900, 4);
console.log(`Total bill->${pasta.total}`);
console.log(`Bill per person->${pasta.billPerPerson}`);
