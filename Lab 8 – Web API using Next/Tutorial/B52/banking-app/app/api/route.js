export async function GET(req) {
    return Response.json({ message: 'you are in /api' }, { status: 200 })
}