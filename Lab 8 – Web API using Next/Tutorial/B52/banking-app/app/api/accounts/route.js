import account
export async function GET(req) {
    const { searchParams } = new URL(req.url)

}

// ADD NEW ACCOUNT [CREATE A NEW ACCOUNT]
export async function POST(req) {
    const data = await req.json()

    return Response.json({
        message: 'You are in the accounts POST', data
    }, { status: 200 })
}

// UPDATE ACCOUNT [UPDATE AN ACCOUNT]
export async function PUT(req) {
    return Response.json({ message: 'You are in the accounts PUT' }, { status: 200 })
}

export async function DELETE(req) {
    return Response.json({ message: 'You are in the accounts DELETE' }, { status: 200 })
}