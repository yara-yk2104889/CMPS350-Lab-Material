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

export function addAccount(accountNo, balance, type) {
    accounts.push({ accountNo, balance, type });
}
export function getAccount(accountNo) {
    return accounts.find(acc => acc.accountNo === accountNo);
}
export function sumBalance() {
    return accounts.reduce((sum, account) => sum + account.balance, 0);
}
export function deleteAccount(accountNo) {
    const index = accounts.findIndex(acc => acc.accountNo === accountNo);
    accounts.splice(index, 1);


    // accounts = accounts.filter(acc => acc.accountNo !== accountNo);
}
function avgBalance() {
    return sumBalance() / accounts.length;
}

// console.log(`The Sum of all accounts = ${sumBalance()}`);


function distributeBenefit(benefitPercentage) {
    accounts.forEach(acc => {
        if (acc.type === 'Savings')
            acc.balance += acc.balance * benefitPercentage / 100;
    });

}

function deductFee(monthlyFee) {
    accounts.forEach(acc => {
        if (acc.type === 'Current')
            acc.balance -= monthlyFee;
    });

}

// distributeBenefit(100);

// console.log(accounts);

export function toJson() {
    return JSON.stringify(accounts);
}
export function fromJson(json) {
    return JSON.parse(json);
}

// console.log(toJson());
// console.log(accounts);

// export the functions above


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