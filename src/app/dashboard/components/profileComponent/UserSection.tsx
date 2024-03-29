export default function UserSection({
    user,
  }: {
    user: { name: string; image: string; email: string };
  }) {
    return (
      <section className=" ml-2 bg-gradient-to-l-r from-pink-600 to-red-600 text-white py-8">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                ¡Bienvenido,{" "}
                {user.name.charAt(0).toUpperCase() + user.name.slice(1)}!
              </h2>
              <p className="text-gray-300 text-sm">{user.email}</p>
              <p className="text-white mt-4">
                Gestiona tus actividades, negocios, tareas del hogar y obtén
                informes detallados para mejorar tus finanzas y tu hogar.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }