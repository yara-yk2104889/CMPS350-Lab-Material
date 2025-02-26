import { expect } from "chai";
import { addAccount, withdraw, deposit, deleteAccount, getAccounts, getAccount } from "../bank.js";

describe("Testing the Bank functionalities", () => {
    //  test the add account

    it("expect adding an account to increase the length of the account by 1", () => {
        const lengthBeforeAdding = getAccounts().length;

        const account = { accountNo: 505, balance: 5000, type: 'Savings', name: 'Jane Doe' };
        addAccount(account);
        const lengthAfterAdding = getAccounts().length;

        expect(lengthAfterAdding).to.equal(lengthBeforeAdding + 1);

        // try to get the account that you added
        const addedAccount = getAccount(505)
        expect(addedAccount.accountNo).to.equal(505);
    })

    // delete account
    it("expect deleting an account to decrease the length of the account by 1", () => {
        const lengthBeforeDeleting = getAccounts().length;

        deleteAccount(505);
        const lengthAfterDeleting = getAccounts().length;

        expect(lengthAfterDeleting).to.equal(lengthBeforeDeleting - 1);

        
    })
})



