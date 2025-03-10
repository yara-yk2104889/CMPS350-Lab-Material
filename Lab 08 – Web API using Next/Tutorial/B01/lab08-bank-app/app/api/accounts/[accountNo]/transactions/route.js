export async function GET(req, { params }) {
    return Response.json({ message: `/api/accounts/${params.accountNo}/transactions` });
}
export async function POST(req, { params }) {
    return Response.json({ message: `/api/accounts/${params.accountNo}/transactions` });
}

