'use client'

import { useTransition } from 'react'
import { logout } from '@/actions/logout/server'

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => logout())}
      disabled={isPending}
      className={`
        bg-red-500 text-white px-4 py-2 rounded
        hover:bg-red-700 transition duration-300
        ${isPending ? 'opacity-70 cursor-not-allowed' : ''}
      `}
    >
      {isPending ? '登出中...' : '退出登录-使用 server action'}
    </button>
  )
}