import { addAccount, getAccount, getAccounts } from "./bank.js";
// import { getAccount } from "./bank.js";
// import { getAccounts } from "./bank.js";
// import { deleteAccount } from "./bank.js";

addAccount({ accountNo: 555, balance: 12000, type: 'Savings', name: 'Layan' })
console.log(getAccount(555))
console.log(getAccounts())