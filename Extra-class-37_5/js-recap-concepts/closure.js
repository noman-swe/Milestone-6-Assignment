/* const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount;
        balance += amount;
        return balance;
    }
} */

//-> kono ekta function theke jodi tmi onno kono ekta  function k OR function er vitor theke jodi arekta function k return koro tahole function er erternal kisu peramiter or property k access and modify kora possible but baire theke tar kisui possible na.

const bank = owner => {
    balance = 0;
    return {
        deposit:amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw:amount => {
            // balance = balance + amount;
            balance -= amount;
            return balance;
        }
    }
}

const mofizBank = bank('Mofiz');
console.log(mofizBank.deposit(100));
console.log(mofizBank.deposit(300));
console.log(mofizBank.deposit(50));
// console.log(mofizBank.deposit.balance);
console.log(mofizBank.deposit(200));

console.log(mofizBank.withdraw(100));
console.log(mofizBank.withdraw(200));
