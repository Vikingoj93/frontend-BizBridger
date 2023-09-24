"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Loading from "@/app/Loading";
import HandleLogin from "@/components/HandlerLogin";

export default function NavBar() {
  const { status } = useSession();

    return (
      <header style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
        <nav className="bg-primary p-4 flex items-center justify-between">
          <div>
            <Link href={'/'}>
            <div className="flex items-center">
            <img
              src='https://i.postimg.cc/Yqrqt6gY/usuario.png'
              alt="Icono de usuario"
              className="w-12 h-12 mr-4"
            />
            <h1 className=" text-xl font-semibold">BizBridger</h1>
          </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex gap-10 space-x-4">
              <li>
                <Link
                  href="/gestiones/personas"
                  className=" font-bold hover:text-gray-300 text-xl"
                >
                  Personas
                </Link>
              </li>
              <li>
                <Link
                  href="/comercial"
                  className=" font-bold hover:text-gray-300 text-xl"
                >
                  Negocio
                </Link>
              </li>
              <li>
                <Link
                  href="/hogar"
                  className=" font-bold hover:text-gray-300 text-xl"
                >
                  Hogar
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className=" font-bold hover:text-gray-300 text-xl"
                >
                  Informes y Recuros
                </Link>
              </li>
            </ul>
          </div>
            {status === "loading"  ? <Loading><p className="font-semibold text-lg m-2">Loading</p></Loading> : <HandleLogin />}
          
        </nav>
      </header>
    );
  }
