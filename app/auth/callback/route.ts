import { NextResponse } from "next/server";
// The client you created from the Server-Side Auth instructions
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  console.log("google 授权回掉code：", code);
  // if "next" is in param, use it as the redirect
  // 如果参数中有“next”，则使用它作为重定向 URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host"); // original origin before load balancer 负载均衡器之前的原始来源
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        // 我们可以确定中间没有负载均衡器，因此无需关注 X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");
  console.log("授权回调错误:", error);
  console.log("授权回调错误描述:", errorDescription);
  // return the user to an error page with instructions
  // 将用户返回到带有说明的错误页面
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
