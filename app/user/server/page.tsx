import { getUserInfo } from "@/actions/user_info/server";

export default async function UserPage() {
    const { user, hasSession } = await getUserInfo();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">用户信息 User Information</h1>
        {hasSession ? (
            <div>
            <p className="text-lg mb-8">用户已登陆 User is logged in:</p>
            <pre className="bg-white p-4 rounded shadow-md">{JSON.stringify(user, null, 2)}</pre>
            </div>
        ) : (
            <p className="text-lg mb-8">未登陆 User is not logged in.</p>
        )}
        </div>
    );
}