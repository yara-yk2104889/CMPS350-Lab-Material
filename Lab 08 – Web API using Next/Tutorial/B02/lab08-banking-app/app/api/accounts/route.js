// under each route you can have the following methods: GET, POST, PUT, DELETE , PATCH etc
import { nanoid } from 'nanoid';
const accounts = [
    { id: 1, name: 'John Doe', balance: 1000 },
    { id: 2, name: 'Jane Doe', balance: 2000 },
    { id: 3, name: 'Jim Doe', balance: 3000 },
]
export async function GET(req) {
    return Response.json(accounts, { status: 200 });
}

export async function POST(req) {
    //capture the request body
    const account = await req.json();
    //generate a unique id
    account.id = nanoid();
    accounts.push(account);
    return Response.json(account, { status: 201 });
}