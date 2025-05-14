import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">nextjs + supabse 谷歌授权登陆示例</h1>
      <p className="text-lg mb-8">Next.js + supabase + google auth</p>

      <div className="flex space-x-4 mb-8">
        <Link href="/login/client">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            谷歌登陆-使用客户端页面
          </button>
        </Link>

        <Link href="/login/server">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            谷歌登陆-使用服务器页面
          </button>
        </Link>
      </div>

      <div className="flex space-x-4 mb-8">
        <Link href="/user/client">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            用户信息-使用客户端页面
          </button>
        </Link>
        <Link href="/user/server">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            用户信息-使用服务器页面
          </button>
        </Link>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            type="submit"
          >
            登出-使用服务器api
          </button>
        </form>
      </div>
    </div>
  );
}
