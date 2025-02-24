const accounts = [
    { accountNo: 123, balance: 1000, type: 'Savings', name: 'John' },
    { accountNo: 124, balance: 2000, type: 'Current', name: 'Jane' },
    { accountNo: 125, balance: 3000, type: 'Savings', name: 'Doe' },
    { accountNo: 126, balance: 4000, type: 'Current', name: 'Smith' },
    { accountNo: 127, balance: 5000, type: 'Savings', name: 'Alex' },
]

export function addAccount(account) {
    // validate before adding
    accounts.push(account);
}

export function getAccount(accountNo) {
    return accounts.find(acc => acc.accountNo === accountNo);
}

export function getAccounts() {
    return accounts;
}