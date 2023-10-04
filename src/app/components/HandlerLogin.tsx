import Link from "next/link";
import { Login, LogOut } from "@/app/components/Buttons";
import { authContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import "./Loading.css"

export default function HandlerLogin() {
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
        
      <div className="loading-container-login">
      <div className="loading-spinner-login"></div>
    </div>
      ) : (
        <>
          {authenticated ? (
            <>
              <Link href={"/dashboard"} className="mr-5 hover:text-white flex justify-center items-center">
                <div className="w-min h-10">
                  <h2 className="inline-block px-4 py-2 border rounded-lg bg-gradient-to-r from-blue-400 to-pink-500 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-600 hover:shadow-md transition duration-300 ease-in-out">
                    Panel
                  </h2>
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
