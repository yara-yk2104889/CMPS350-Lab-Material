export async function GET(req, { params }) {
    const message = { message: `API endpoint GET http://localhost:3000/api/accounts/${params.accountNo}` };
    return Response.json(message, { status: 200 });
}