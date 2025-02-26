import { expect } from "chai";
import { addAccount, getAccounts, getAccount, withdraw, deposit } from "../bank.js";
import { it } from "mocha";


// used for grouping tests together
describe("The bank", () => {
    it("adding account to increase the size of the array by 1", () => {
        const initialSize = getAccounts().length;
        addAccount({ accountNo: 555, balance: 12000, type: 'Savings', name: 'Layan' })
        const finalSize = getAccounts().length;
        expect(finalSize).to.equal(initialSize + 1);
    });

    it("Withdraw 1000 from account 555", () => {
        const account = getAccount(555);

        const initialBalance = account.balance;
        withdraw(555, 1000);
        const finalBalance = account.balance;
        expect(finalBalance).to.equal(initialBalance - 1000);
    });

});
