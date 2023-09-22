"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {useRouter} from 'next/navigation';
import Loading from '@/app/Loading'

export default function NavBar() {
  const router = useRouter();
  const { data: session, status } = useSession();
    if (status === "loading") {
    return <Loading />;
  }

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto w-full flex flex-wrap items-center text-base justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">BizBridger</span>
            </Link>
          </div>
          <div>
            {session && (status === "authenticated") ? (
              <>
                <Link href={"/dashboard"} className="mr-5 hover:text-white">
                  Panel
                </Link>
 
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    signOut({ redirect: false });
                    router.push('/')
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
