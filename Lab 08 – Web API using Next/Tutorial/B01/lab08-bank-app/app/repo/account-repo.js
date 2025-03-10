import path from 'path';
import fse from 'fs-extra';
import { nanoid } from 'nanoid';

class AccountRepo {
    constructor() {
        this.path = path.join(process.cwd(), 'app/data/accounts.json');
    }

    //1. read all accounts
    async getAccounts(type) {
        const accounts = await fse.readJson(this.path);
        if (!type)
            return accounts;
        return accounts
            .filter(account =>
                account.acctType.toLowerCase() == type.toLowerCase());
    }

    async saveAccounts(accounts) {
        return fse.writeJson(this.path, accounts);
    }

    //2 . read an account that has specific id
    async getAccount(accountNo) {
        const accounts = await this.getAccounts();
        const account = accounts.find(account => account.accountNo == accountNo);

        if (!account) {
            return { error: 'account not found' };
        }
        return account;
    }


    //3. create a new account
    async createAccount(account) {
        account.accountNo = nanoid();
        const accounts = await this.getAccounts();
        accounts.push(account);
        await this.saveAccounts(accounts);
        return account;
    }


    //4. update an account
    async updateAccount(accountNo, account) {
        const accounts = await this.getAccounts();
        const index = accounts.findIndex(account => account.accountNo == accountNo);

        if (index === -1) {
            return { error: 'account not found' };
        }

        accounts[index] = { ...accounts[index], ...account };
        await this.saveAccounts(accounts);
        return account;
    }


    //5. delete an account
    async deleteAccount(accountNo) {
        const accounts = await this.getAccounts();
        const index = accounts.findIndex(account => account.accountNo == accountNo);

        if (index === -1) {
            return { error: 'account not found' };
        }

        accounts.splice(index, 1);
        await this.saveAccounts(accounts);
        return { message: 'account deleted' };
    }

    async addTransaction(transaction) {
        transaction.accountNo = parseInt(transaction.accountNo.toString());
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const accounts = await this.getAccounts();
            const account = accounts.find(account => account.accountNo == transaction.accountNo);
            if (transaction.transType == 'Deposit') {
                account.deposit(transaction.amount);
            } else {
                account.withdraw(transaction.amount);
            }
            await this.saveAccounts(accounts);
            return { message: 'transaction added' };
        } catch (err) {
            throw err;
        }
    }
}

export default AccountRepo;

// const person = {
//     name: 'John',
//     age: 30
// }

// function updatePerson(p){
//     person = p
// }

// updatePerson({name: 'Jane'});