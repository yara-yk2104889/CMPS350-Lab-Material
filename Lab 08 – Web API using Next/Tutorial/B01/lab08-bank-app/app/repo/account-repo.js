import path from 'path';
import fse from 'fs-extra';
import nanoid from 'nanoid';

class AccountRepo {
    constructor() {
        this.path = path.join(process.cwd(), 'app/data/accounts.json');
    }

    //1. read all accounts
    async getAccounts() {
        return fse.readJson(this.path);
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


    //5. delete an account


    //6. read all transactions of an account


    //7. create a new transaction for an account
}