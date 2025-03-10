export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const { type } = Object.fromEntries(searchParams.entries());
    return Response.json({ message: 'You called the GET', type });
}
export async function POST(req) {
    return Response.json({ message: 'You called the POST' });
}

