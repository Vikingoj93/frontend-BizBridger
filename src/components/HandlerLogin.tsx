"use client";
import React from "react";
import Link from "next/link";
import { useSession} from "next-auth/react";
import {SignIn, SignOut} from '@/components/Buttons'

export default function handlerLogin() {
  const { data: session } = useSession();

  return (
    <div className="user-actions">
      {session ? (
        <>
          <Link href={"/dashboard"} className="mr-5 hover:text-white">
            
      <i className="fas fa-user-circle text-white text-2xl">perfil</i>
          </Link>
         <SignOut/>
        </>
      ) : (
        <SignIn/>
      )}
    </div>
  );
}
