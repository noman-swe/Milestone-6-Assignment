function PatriChai(age, earning) {
    console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);

    var trueAge = age + 7;

    function canMarry(expense) {
        const remaining = earning - expense;
        if (remaining > 10000) {
            return true;
        }
        return false;
    }
}

PatriChai(21, 50000);

// var ta block scope create kore na, var ta ekdom hoist or upore uthe jay..block k ignore kore upore uthe jay
