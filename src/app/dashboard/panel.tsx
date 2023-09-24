import Link from "next/link";

export default function Panel() {
  return (
    <section className="flex flex-col bg-quinary text-white w-64 min-h-screen p-4">
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-2">
          <li className="my-4">
            <span className="font-bold">Gestion Personal</span>
            <ul className="space-y-2 box-border my-2">
              <li className="my-2">
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Tareas y Agenda
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Finanzas Personales
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Notas y Documentos
                </Link>
              </li>
            </ul>
          </li>
          <li className="my-4">
            <span className="font-bold">Gestión de Negocios</span>
            <ul className="space-y-2 box-border my-2">
              <li className="my-2">
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Inventario
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Contabilidad Comercial
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Rentabilidad
                </Link>
              </li>
            </ul>
          </li>
          <li className="my-4">
            <span className="font-bold">Optimización del Hogar</span>
            <ul className="space-y-2 box-border my-2">
              <li className="my-2">
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Consumo Doméstico
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Tareas Domésticas
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  otros
                </Link>
              </li>
            </ul>
          </li>
          <li className="my-4">
            <span className="font-bold">Informes y Análisis</span>
            <ul className="space-y-2 box-border my-2">
              <li className="my-2">
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Informe de Gastos
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Informe de Rendimiento
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-4 hover:text-lg"
                  href={"#"}
                >
                  Optimizaciones
                </Link>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </section>
  );
}
