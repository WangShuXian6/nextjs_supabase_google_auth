import { login } from "@/actions/login/server";
import ClientSubmitButton from "@/app/components/client_submit_button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">服务器页面谷歌授权登陆示例</h1>
      <p className="text-lg mb-8">Next.js + supabase + google auth</p>
      <form action={login}>
        <ClientSubmitButton />
      </form>
    </div>
  );
}
