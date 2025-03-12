import accountRepo from "@/app/repo/account-repo"

export async function GET(req, { params }) {
    const account = await accountRepo.getAccount(params.accountNo)
    return Response.json(account, { status: 200 })
}