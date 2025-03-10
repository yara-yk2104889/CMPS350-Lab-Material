const accounts = [
    { id: 1, name: 'Account 1' },
    { id: 2, name: 'Account 2' },
    { id: 3, name: 'Account 3' },
    { id: 4, name: 'Account 4' },
    { id: 5, name: 'Account 5' },
]
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const { type } = Object.fromEntries(searchParams.entries());
    return Response.json(accounts);
}
export async function POST(req) {
    return Response.json({ message: 'POST /api/accounts' });
}
