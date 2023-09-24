"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignIn() {
  const router = useRouter();
  return (
    <button
      className="bg-tertiary hover:bg-tertiary text-white font-semibold py-2 px-4 rounded-full shadow-md"
      type="button"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
}
export function SignOut() {
  const router = useRouter();
  return (
    <button
      className="bg-buttonRed hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md"
      type="button"
      onClick={() => {
        signOut({ redirect: false });
        router.push("/");
      }}
    >
      Sign Out
    </button>
  );
}
