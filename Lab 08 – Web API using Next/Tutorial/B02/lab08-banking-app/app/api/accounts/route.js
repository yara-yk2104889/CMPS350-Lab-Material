// under each route you can have the following methods: GET, POST, PUT, DELETE , PATCH etc
import { nanoid } from 'nanoid';
const accounts = [
    { accountNo: 1, name: 'John Doe', balance: 1000, type: 'savings' },
    { accountNo: 2, name: 'Jane Doe', balance: 2000, type: 'current' },
    { accountNo: 3, name: 'John Smith', balance: 3000, type: 'savings' },
    { accountNo: 4, name: 'Jane Smith', balance: 4000, type: 'current' },
]

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const { type } = Object.fromEntries(searchParams.entries())
    if (type) {
        const filteredAccounts = accounts.filter(account => account.type == type);
        return Response.json(filteredAccounts, { status: 200 });
    }

    return Response.json(accounts, { status: 200 });
}

export async function POST(req) {
    //capture the request body
    const account = await req.json();
    //generate a unique id
    account.accountNo = nanoid();
    accounts.push(account);
    return Response.json(account, { status: 201 });
}