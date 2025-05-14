"use client";
import { getUserInfo } from "@/actions/user_info/server";
import { useEffect, useState } from "react";
import SignOutButton from "@/app/components/sign_out_button_use_api";
import SignOutButtonServerAction from "@/app/components/sign_out_button_use_action";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const info = await getUserInfo();
        setUserInfo(info);
      } catch (error) {
        console.error("Error fetching user info:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">用户信息 User Info</h1>
      {userInfo?.hasSession ? (
        <>
          <div className="w-full max-w-2xl">
            <p className="text-lg mb-4">用户已登陆 User is logged in:</p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(userInfo.user, null, 2)}
              </pre>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <SignOutButton />
            <SignOutButtonServerAction />
          </div>
        </>
      ) : (
        <p className="text-lg mb-8">您未登陆 User is not logged in</p>
      )}
    </div>
  );
}
