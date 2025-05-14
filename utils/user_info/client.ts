//客户端使用的获取用户信息函数
import { createClient } from "@/utils/supabase/client";

export async function getUserInfo() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.getSession();
    const { data: userData } = await supabase.auth.getUser();

    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSession: !!data.session,
      timestamp: new Date().toISOString(),
      user: userData,
      error: error ? String(error) : null,
      session: data.session,
    };
  } catch (error) {
    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSession: false,
      timestamp: new Date().toISOString(),
      user: null,
      error: String(error),
      session: null,
    };
  }
}