export async function GET(req) {
    const message = { message: 'API endpoint GET http://localhost:3000/api' };
    return Response.json(message, { status: 200 });
}

// adding a new content [add a new account]
export async function POST(req) {
    const message = { message: 'API endpoint POST http://localhost:3000/api' };
    return Response.json(message, { status: 200 });
}

// update an existing content [update the account with accountNo 1123]
export async function PUT(req) {
    const message = { message: 'API endpoint PUT http://localhost:3000/api' };
    return Response.json(message, { status: 200 });
}
// delete an existing content [delete the account with accountNo 1123]
export async function DELETE(req) {
    const message = { message: 'API endpoint DELETE http://localhost:3000/api' };
    return Response.json(message, { status: 200 });
}
