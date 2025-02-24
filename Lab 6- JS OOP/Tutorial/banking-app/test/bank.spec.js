import { expect } from "chai";
import { sumBalance } from "../bank.js";

// describe is a function that groups tests together
// it is a function that runs a test
describe("Banking Functionalities", () => {
    it("sum balance should be 39500", () => {
        expect(sumBalance()).to.equal(39500);
    });
});