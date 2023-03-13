function carRentPrice(days,cartype){
    let rentalcost;
    switch(cartype){
        case 'Economy':
            rentalcost = 4000;
            break;
        case 'Midsize':
            rentalcost = 10000;
            break;
        case 'Luxary':
            rentalcost = 20000;
            break;
            default:
                return "Invalid car type"
    }
    return rentalcost * days;
}
let price = carRentPrice(2,'Economy')
console.log(price);