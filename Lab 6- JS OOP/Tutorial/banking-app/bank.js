const accounts = [
    { accountNo: 123, balance: 500, type: 'Savings' },
    { accountNo: 234, balance: 4000, type: 'Current' },
    { accountNo: 345, balance: 35000, type: 'Savings' },
]

function deposit(accountNo, amount) {
    const account = accounts.find(acc => acc.accountNo === accountNo);
    account.balance += amount;
}

function withdraw(accountNo, amount) {
    const account = accounts.find(acc => acc.accountNo === accountNo);

    if (account.balance >= amount)
        account.balance -= amount;
    else
        console.log('Insufficient balance');

}

function addAccount(accountNo, balance, type) {
    accounts.push({ accountNo, balance, type });
}
function getAccount(accountNo) {
    return accounts.find(acc => acc.accountNo === accountNo);
}
// function sumBalance()
// function avgBalance()

// function distributeBenefit(benefitPercentage)
// function deductFee(monthlyFee)
// function toJson()
// function fromJson(json)


/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

const objects = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 40 },
]

const sum = numbers.reduce((acc, obj) => acc + obj.age, 0);
*/