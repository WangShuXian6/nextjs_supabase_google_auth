'use server'
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function getUserInfo() {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase.auth.getSession();
    const user = await supabase.auth.getUser();

    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSession: !!data.session,
      timestamp: new Date().toISOString(),
      user: user,
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
