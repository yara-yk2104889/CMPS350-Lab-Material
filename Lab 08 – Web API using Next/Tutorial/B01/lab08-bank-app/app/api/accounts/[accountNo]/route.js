//GET THE RECORDS
export async function GET(req, { params }) {

    const accountNo = params.accountNo;
    return Response.json({ message: 'GET /api/accounts/{accountNo}', accountNo });
}
// UPDATE EXISTING RECORD
export async function PUT(req, { params }) {
    const { accountNo } = params;
    return Response.json({ message: 'PUT /api/accounts/{accountNo}' });
}
// DELETE RECORD
export async function DELETE(req) {
    return Response.json({ message: 'DELETE /api/accounts/{accountNo}' });
}