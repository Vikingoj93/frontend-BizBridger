"use client";
import React from "react";
import { SignIn, LogOut } from "@/components/Buttons";

export default function handlerLogin() {

  return (
    <div className="min-w-min flex">
      {/*session ? (
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
       )*/<>
       <SignIn/><LogOut/>
       </>
       }
    </div>
  );
}
