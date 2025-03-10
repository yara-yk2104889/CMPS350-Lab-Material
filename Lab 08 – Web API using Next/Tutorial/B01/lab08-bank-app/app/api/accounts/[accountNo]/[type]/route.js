export async function GET(req, { params }) {
    return Response.json({ message: 'You called the GET', params });
}

