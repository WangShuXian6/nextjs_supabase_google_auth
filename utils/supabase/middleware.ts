//由于 Server Components 无法写入 Cookie，因此您需要中间件来刷新过期的 Auth 令牌并存储它们。这是通过以下方式实现的：

// 通过调用 supabase.auth.getUser 刷新 Auth 令牌。
// 通过 request.cookies.set 将刷新的 Auth 令牌传递给 Server Components，这样它们就不会尝试自己刷新相同的令牌。
// 将刷新的 Auth 令牌传递给浏览器，以便它替换旧令牌。这是通过 response.cookies.set 完成的。
// 你也可以添加一个 matcher，这样 middleware 只在访问 Supabase 的 route 上运行。有关更多信息，请查看此文档 。

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // refreshing the auth token
  await supabase.auth.getUser()

  return supabaseResponse
}