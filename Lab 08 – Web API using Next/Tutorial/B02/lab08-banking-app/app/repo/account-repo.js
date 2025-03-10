import fse from 'fs-extra';
import path from 'path';
import { nanoid } from 'nanoid';

class AccountRepo {
    constructor() {
        this.accountFilePath = path.join(process.cwd(), 'app/data/accounts.json');
        this.transactionFilePath = path.join(process.cwd(), 'app/data/transactions.json');
    }

    // we will create a helper method to save the accounts to the file

    async saveAccounts(accounts) {
        await fse.writeJson(this.accountFilePath, accounts);
    }
    async saveTransactions(transactions) {
        await fse.writeJson(this.transactionFilePath, transactions);
    }

}

export default new AccountRepo();