export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const { type } = Object.fromEntries(searchParams.entries());
    return Response.json(accounts);
}
export async function POST(req) {
    return Response.json({ message: 'POST /api/accounts' });
}
