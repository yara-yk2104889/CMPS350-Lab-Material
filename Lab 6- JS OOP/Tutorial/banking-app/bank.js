const accounts = [
    { accountNo: 123, balance: 500, type: 'Savings' },
    { accountNo: 234, balance: 4000, type: 'Current' },
    { accountNo: 345, balance: 35000, type: 'Savings' },
]

export function deposit(accountNo, amount) {
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

export function deductFee(monthlyFee) {
    accounts.forEach(acc => {
        if (acc.type === 'Current')
            acc.balance -= monthlyFee;
    });

}

export function toJson() {
    return JSON.stringify(accounts);
}
export function fromJson(json) {
    return JSON.parse(json);
}
