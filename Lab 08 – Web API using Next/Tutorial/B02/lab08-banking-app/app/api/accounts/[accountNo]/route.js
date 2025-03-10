export async function GET(req, { params }) {
    return Response.json({ accountNo: params.accountNo }, { status: 200 });
}