// import the exported function from the module bank.js
/*

module.exports = {
    deposit,
    withdraw,
    addAccount,
    getAccount,
    sumBalance,
    deleteAccount,
    avgBalance,
    distributeBenefit,
    deductFee,
    toJson,
    fromJson
}
*/

import { toJson, fromJson } from './bank.js';
console.log(toJson());
console.log(fromJson(toJson()));
