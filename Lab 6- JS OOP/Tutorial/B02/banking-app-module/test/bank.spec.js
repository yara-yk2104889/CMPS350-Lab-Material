import { expect } from "chai";
import { addAccount, getAccount, getAccounts } from "../bank.js";

// describe() is a function that takes two arguments: 
// a string and a function. Is used to group tests together.

// we use it inside the describe() to check one specific thing.

describe("The Bank", () => {
    it("expect after adding an account the length of the array to be 5", () => {
        addAccount({ accountNo: 128, balance: 6000, type: 'Current', name: 'John' });
        expect(getAccounts().length).to.equal(6);
    });

    // test the get account
    it("expect the account to be found", () => {
        const account = getAccount(128);
        expect(account.accountNo).to.equal(128);
    });
})
describe("Another Tests", () => {
    it("Another expect after adding an account the length of the array to be 5", () => {
        addAccount({ accountNo: 128, balance: 6000, type: 'Current', name: 'John' });
        expect(getAccounts().length).to.equal(7);
    });

    // test the get account
    it("Another expect the account to be found", () => {
        const account = getAccount(128);
        expect(account.accountNo).to.equal(128);
    });
})