'use server';
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const login = async () => {
  const supabase = await createClient();
  const headersList = await headers();
  const origin = headersList.get('origin') || headersList.get('host');
  const provider = "google"; // or 'google', 'twitter', etc.
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      //通过 request 获取 origin
      redirectTo: `${origin}/auth/callback`, // The URL to redirect to after authentication
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};
