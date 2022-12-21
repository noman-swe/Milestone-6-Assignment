const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
}

const mofizBank = bank('Mofiz');
console.log(mofizBank(100));
console.log(mofizBank(300));
console.log(mofizBank(50));
console.log(mofizBank.balance);
console.log(mofizBank(200));