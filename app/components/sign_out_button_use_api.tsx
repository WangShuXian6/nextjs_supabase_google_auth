"use client";
//用于在客户端页面访问登出路由端点的登出按纽组件

// 在use client页面中使用此组件
// import SignOutButton from '@/app/components/SignOutButton';

// export default function UserInfo() {
//   return (
//     <div>
//       {/* ...现有的用户信息展示代码... */}
//       <SignOutButton />
//     </div>
//   );
// }

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await fetch("/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("登出成功");

        // 登出成功后会自动重定向到首页
        // 如果需要手动重定向，可以使用：
        router.push("/");
      }
    } catch (error) {
      console.error("登出失败:", error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
    >
      退出登录-使用api
    </button>
  );
}
