'use client'

import {signIn, signOut} from 'next-auth/react'
import {useRouter} from 'next/navigation'


export function SignIn() {
    const router = useRouter()
    return (
        <button
        className="bg-greeng text-white px-3 py-1 rounded-md hover:bg-green-600"
          type="button"
          onClick={() => signIn()}
          >
          Sign In
        </button>
  )
}
export function SignOut() {
    const router = useRouter()
  return (
    <button
    className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700"
    type="button"
    onClick={() => {
      signOut({ redirect: false });
      router.push("/");
    }}
  >
    Sign Out
  </button>
  )
}
