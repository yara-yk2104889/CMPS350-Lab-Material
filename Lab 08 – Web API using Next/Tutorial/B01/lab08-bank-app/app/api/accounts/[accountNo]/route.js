//GET THE RECORDS
export async function GET(req, { params }) {
    const { searchParams } = new URL(req.url);
    const searchParamsEntries = Object.fromEntries(searchParams.entries());

    return Response.json({ message: 'You called the GET', params, searchParams: searchParamsEntries });
}
// CREATE NEW RECORD
export async function POST(req) {
    return Response.json({ message: 'You called the POST' });
}
// UPDATE EXISTING RECORD
export async function PUT(req) {
    return Response.json({ message: 'You called the PUT' });
}
// DELETE RECORD
export async function DELETE(req) {
    return Response.json({ message: 'You called the DELETE' });
}