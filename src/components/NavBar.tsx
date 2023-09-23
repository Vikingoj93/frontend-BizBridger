"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loading from "@/app/Loading";
import HandleLogin from "@/components/HandlerLogin";

export default function NavBar() {
  const { status } = useSession();

    return (
      <header>
        <nav className="bg-primary p-4 flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-semibold">BizBridger</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex gap-8 space-x-4">
              <li>
                <Link
                  href="/personal"
                  className="text-white hover:text-gray-300 text-xl"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  href="/comercial"
                  className="text-white hover:text-gray-300 text-xl"
                >
                  Comercial
                </Link>
              </li>
              <li>
                <Link
                  href="/hogar"
                  className="text-white hover:text-gray-300 text-xl"
                >
                  Hogar
                </Link>
              </li>
            </ul>
          </div>
            {status === "loading"  ? <Loading><p>Loading</p></Loading> : <HandleLogin />}
          
        </nav>
      </header>
    );
  }
