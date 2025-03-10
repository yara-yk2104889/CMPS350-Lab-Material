// under each route you can have the following methods: GET, POST, PUT, DELETE , PATCH etc
const accounts = [
    { id: 1, name: 'John Doe', balance: 1000 },
    { id: 2, name: 'Jane Doe', balance: 2000 },
    { id: 3, name: 'Jim Doe', balance: 3000 },
]
export async function GET(req) {
    return Response.json(accounts, { status: 200 });
}