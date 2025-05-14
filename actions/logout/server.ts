'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
    const supabase = await createClient()

  // 检查用户是否已登录
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  // 使用 redirect 函数进行重定向
  redirect('/')
}