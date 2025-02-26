const accounts = [
    { accountNo: 111, balance: 1000, type: 'Savings', name: 'Ali' },
    { accountNo: 121, balance: 2000, type: 'Current', name: 'Omar' },
    { accountNo: 131, balance: 3000, type: 'Savings', name: 'Mohamed' },
    { accountNo: 141, balance: 4000, type: 'Current', name: 'Yusuf' },
]


export function addAccount(account) {
    accounts.push(account)
}

export function getAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo)
}

export function getAccounts() {
    return accounts
}

export function deleteAccount(accountNo) {
    const index = accounts.findIndex(account => account.accountNo === accountNo)
    accounts.splice(index, 1)
}

export function deposit(accountNo, amount) {
    const account = getAccount(accountNo)
    account.balance += amount
}

export function withdraw(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    account.balance -= amount
}

export function sumBalance() {
    return accounts.reduce((acc, account) => acc + account.balance, 0)
}

export function avgBalance() {
    return sumBalance() / accounts.length
}

