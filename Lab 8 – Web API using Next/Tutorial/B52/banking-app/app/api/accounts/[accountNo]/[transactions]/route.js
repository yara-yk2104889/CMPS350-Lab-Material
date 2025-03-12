export async function GET(req, { params }) {
    return Response.json({ message: 'You are in the transactions', params }, { status: 200 })
}