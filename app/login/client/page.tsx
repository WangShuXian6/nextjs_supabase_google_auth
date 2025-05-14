"use client";
import { login } from "@/actions/login/server";
import { LoadingSpinner } from "@/app/components/loading_spinner";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      await login();
    } catch (error) {
      console.error("登录失败:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">客户端页面谷歌授权登陆示例</h1>
      <p className="text-lg mb-8">Next.js + supabase + google auth</p>
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className={`
          bg-blue-500 text-white px-4 py-2 rounded 
          hover:bg-blue-700 transition duration-300
          flex items-center space-x-2
          ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
        `}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span>登录中...</span>
          </>
        ) : (
          "Google Login"
        )}
      </button>
    </div>
  );
}
