"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignIn, SignOut } from "@/components/Buttons";
import userImage from '../../public/usuario.svg'
import path from 'path'

export default function handlerLogin() {
  const { data: session } = useSession();

  return (
    <div className="min-w-min flex">
      {session ? (
        <>
          <Link href={"/dashboard"} className="mr-5 hover:text-white">
            <div className="w-10 h-10">

          <img src='https://i.postimg.cc/HjNC276k/usuario.png' alt='usuario'/>
            </div>

          </Link>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
