const accounts = [
    { accountNo: 1, balance: 1000, type: 'Savings', name: 'John Doe' },
    { accountNo: 2, balance: 2000, type: 'Current', name: 'Ali Doe' },
    { accountNo: 3, balance: 3000, type: 'Savings', name: 'Omar Smith' },
    { accountNo: 4, balance: 4000, type: 'Current', name: 'Jane Smith' },
]

function getAccount(accountNo) {
    return accounts.find(acc => acc.accountNo === accountNo);
}
function deposit(accountNo, amount) {
    const account = getAccount(accountNo);
    if (!account) {
        return 'Account not found';
    }
    account.balance += amount;
}
function withdraw(accountNo, amount) {
    const account = getAccount(accountNo);
    if (!account) {
        return 'Account not found';
    } else if (account.balance < amount) {
        return 'Insufficient balance';
    }
    account.balance -= amount;
}


