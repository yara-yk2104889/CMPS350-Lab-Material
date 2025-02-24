import {
    addAccount,
    getAccount,
    getAccounts
} from "./bank.js";

console.log(getAccounts());

addAccount({ accountNo: 128, balance: 6000, type: 'Current', name: 'John' });

const newAccount = getAccount(128);
console.log(getAccounts());

newAccount.balance = 7000;

console.log(getAccounts());