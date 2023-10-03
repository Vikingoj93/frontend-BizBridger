'use client'
import Link from "next/link";
import HandleLogin from "@/components/HandlerLogin";
import { authContext } from "@/context/AuthContext";

export default function NavBar() {

  const autenticated = authContext()

  return (
    <header style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
      <nav className="bg-primary p-4 flex items-center justify-between">
        <div className="">
          <Link href={'/'}>
            <div className="flex items-center">
              <img
                src='https://i.postimg.cc/Yqrqt6gY/usuario.png'
                alt="Icono de usuario"
                className="w-12 h-12 mr-4"
              />
              <h1 className="text-xl font-semibold">BizBridger</h1>
            </div>
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <ul className="flex gap-10 space-x-4">
            <li>
              <Link
                href="/gestiones/personas"
                className="font-bold hover:text-gray-300 text-xl"
              >
                Personas
              </Link>
            </li>
            <li>
              <Link
                href="/comercial"
                className="font-bold hover:text-gray-300 text-xl"
              >
                Negocio
              </Link>
            </li>
            <li>
              <Link
                href="/hogar"
                className="font-bold hover:text-gray-300 text-xl"
              >
                Hogar
              </Link>
            </li>
            <li>
              <Link
                href="/recursos"
                className="font-bold hover:text-gray-300 text-xl"
              >
                Informes y Recursos
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <HandleLogin />
        </div>
      </nav>
    </header>
  );
}
