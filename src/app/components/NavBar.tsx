"use client";
import Link from "next/link";
import HandleLogin from "@/app/components/HandlerLogin";
import { authContext } from "@/context/AuthContext";

export default function NavBar() {
  const autenticated = authContext();

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <div className="flex items-center">
              <img
                src="https://i.postimg.cc/Yqrqt6gY/usuario.png"
                alt="Icono de usuario"
                className="w-12 h-12 mr-4"
              />
              <h1 className="text-xl font-semibold text-white hover:text-gray-300">
                BizBridger
              </h1>
            </div>
          </Link>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <ul className="flex gap-10 space-x-4">
            <li>
              <Link
                href="/gestiones/personas"
                className="text-xl text-white hover:text-gray-300"
              >
                Personas
              </Link>
            </li>
            <li>
              <Link
                href="/comercial"
                className="text-xl text-white hover:text-gray-300"
              >
                Negocio
              </Link>
            </li>
            <li>
              <Link
                href="/hogar"
                className="text-xl text-white hover:text-gray-300"
              >
                Hogar
              </Link>
            </li>
            <li>
              <Link
                href="/recursos"
                className="text-xl text-white hover:text-gray-300"
              >
                Informes y Recursos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <HandleLogin />
        </div>
      </nav>
    </header>
  );
}
