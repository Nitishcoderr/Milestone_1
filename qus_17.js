const customer = {
    name:"Nitish",
    balance: 1000
};

function deposite(customer,amount){
    customer.balance += amount;
    return customer.balance;
} 
function withdraw(customer,amount){
    if(amount > customer.balance){
        return "Insufficiant Balance"
    }
    else{
        return customer.balance -= amount;
    }
}

const newBalance = deposite(customer,1000) 
console.log(`Newbalance = ${newBalance}`);

const newbalance = withdraw(customer,500)
if(newbalance === 'Insufficiant Balance'){
    console.log(newbalance)
}
else{
    console.log(`New Balance = ${newbalance}`);
}