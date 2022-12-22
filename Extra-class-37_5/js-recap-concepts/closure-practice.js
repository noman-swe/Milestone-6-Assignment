const bank = owner => {
    balance = 0;
    console.log(owner);

    return {
        deposit:amount => {
            balance += amount;
            return balance;
        },
        withdraw:amount => {
            balance -= amount;
            return balance;
        }
    }
}

const ShantoBank = bank('Shanto');
console.log(ShantoBank.deposit(100));
console.log(ShantoBank.deposit(500));
console.log(ShantoBank.deposit(500));
console.log(ShantoBank.withdraw(50));

const ShiblyBank = bank('Shibly');
console.log(ShiblyBank.deposit(250));
console.log(ShiblyBank.deposit(250));
console.log(ShiblyBank.withdraw(50));
