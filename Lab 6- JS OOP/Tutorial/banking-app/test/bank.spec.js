import { expect } from "chai";
import { sumBalance, deposit, getAccount } from "../bank.js";

// describe is a function that groups tests together
// it is a function that runs a test
describe("Banking Functionalities", () => {
    it("sum balance should be 39500", () => {
        expect(sumBalance()).to.equal(39500);
    });
    it("Deposit 500 to Account No 123 to be 1000", () => {
        deposit(123, 500);
        expect(getAccount(123).balance).to.equal(10000);
    });

});