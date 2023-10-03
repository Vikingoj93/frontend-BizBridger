"use client";
import Link from "next/link";
import { Login, LogOut } from "@/app/components/Buttons";
import { authContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function handlerLogin() {
  const [loading, setLoading] = useState(true);

  const authenticated = authContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-w-min flex">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          {authenticated ? (
            <>
              <Link href={"/dashboard"} className="mr-5 hover:text-white flex justify-center items-center">
                <div className="w-min h-10">
                  <h2 className="inline-block px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-md transition duration-300 ease-in-out">Panel</h2>
                </div>
              </Link>
              <LogOut />
            </>
          ) : (
            <Login />
          )}
        </>
      )}
    </div>
  );
}
