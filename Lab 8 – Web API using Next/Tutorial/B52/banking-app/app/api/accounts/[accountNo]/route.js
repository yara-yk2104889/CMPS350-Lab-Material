const accounts = [
    { accountNo: 1, name: 'John Doe' },
    { accountNo: 2, name: 'Jane Doe' },
    { accountNo: 3, name: 'Alice' },
    { accountNo: 4, name: 'Bob' },
]
export async function GET(req, { params }) {
    const oneAccount = accounts
        .find(account => account.accountNo == params.accountNo)
    return Response.json(oneAccount, { status: 200 })
}