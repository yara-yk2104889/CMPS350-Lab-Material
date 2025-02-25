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
function deleteAccount(accountNo) {
    const index = accounts.findIndex(acc => acc.accountNo === accountNo);
    accounts.splice(index, 1);

    // accounts = accounts.filter(acc => acc.accountNo !== accountNo); //error [constant] cannot be reassigned
}
function update(updatedAccount) {
    const index = accounts.findIndex(acc => acc.accountNo === updatedAccount.accountNo);
    // accounts.splice(index, 1, updatedAccount);
    accounts[index] = updatedAccount;

    // accounts = accounts.filter(acc => acc.accountNo !== accountNo); //error [constant] cannot be reassigned
}
function sumBalance() {
    return accounts.reduce((acc, curr) => acc + curr.balance, 0);
}
function averageBalance() {
    return sumBalance() / accounts.length;
}