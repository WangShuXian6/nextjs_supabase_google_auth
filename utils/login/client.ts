// 客户端使用的登录函数
import { createClient } from "@/utils/supabase/client";

export const login = async () => {
  const supabase = await createClient();
  const provider = "google"; // or 'google', 'twitter', etc.
  await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`, // The URL to redirect to after authentication
    },
  });
};
