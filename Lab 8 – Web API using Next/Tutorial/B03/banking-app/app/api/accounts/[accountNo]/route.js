import accountRepo from "@/app/repo/account-repo";

export async function GET(req, { params }) {
    const accountNo = params.accountNo;
    const account = await accountRepo.getAccount(accountNo);
    return Response.json(account, { status: 200 });

}