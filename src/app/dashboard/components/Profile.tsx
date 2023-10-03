"use client";
import { useContext } from "react";
import { contextD } from "../../../context/DashboardContext";

function UserSection({
  user,
}: {
  user: { name: string; image: string; email: string };
}) {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-2xl font-semibold mb-0 pb-0">
              ¡Bienvenido,{" "}
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}! Aquí
              tienes el control total de tu experiencia en BizBridger.
            </h2>
            <p className="text-gray-600 text-sm pt-0 mt0">{user.email}</p>
            <p className="">
              Gestiona tu actividades, negocios, tareas del hogar, obten
              informes detallados para mejorar puntos de tus finanzas negocios y
              el hogar, y mantén tu perfil actualizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section className="bg-primary p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Bienvenido a BizBridger</h1>
        <p className="text-lg">
          Descubre una nueva forma de gestionar tu negocio y hogar con nuestra
          aplicación. Facilitamos tus tareas diarias y te proporcionamos
          informes y recursos para mejorar tus resultados.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { userData } = useContext(contextD);

  if (!userData) {
    // Puedes mostrar un indicador de carga mientras userData se carga desde el contexto.
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <UserSection user={userData} />
      <IntroductionSection />
      {/* Otros componentes y contenido */}
    </div>
  );
}
