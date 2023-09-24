import React from 'react';

function HomePage() {
  return (<>
    {/* Sección del banner */}
      <section id="banner" className="text-gray-300 bg-primary py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a BizBridger</h1>
          <p className="text-lg">
            Tu compañero personal para simplificar y organizar todos los aspectos de tu vida cotidiana, tu negocio personal y el control de tu hogar.
          </p>
        </div>
      </section>
<div className="bg-quinary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >

      {/* Sección de Gestión Personal */}
      <section id="gestion-personal" className="bg-quinary text-gray-600 py-16  border-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Gestión Personal</h2>
          
          {/* Subsección de Tareas y Agenda */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Tareas y Agenda</h3>
            <p className="text-lg">
              Gestiona tus tareas, eventos y citas personales. Mantén un registro de tus actividades diarias y planifica tu agenda con facilidad.
            </p>
          </div>
          
          {/* Subsección de Finanzas Personales */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Finanzas Personales</h3>
            <p className="text-lg">
              Realiza un seguimiento de tus gastos, ingresos y presupuestos personales. Mantén tus finanzas en orden y toma el control de tu dinero.
            </p>
          </div>

          {/* Subsección de Notas y Documentos */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Notas y Documentos</h3>
            <p className="text-lg">
              Toma notas, guarda documentos y lleva registros de proyectos personales. Mantén toda tu información importante en un solo lugar.
            </p>
          </div>
          
          {/* Aquí puedes agregar un botón para comenzar o más contenido */}
        </div>
      </section>

      {/* Sección de Gestión de Negocio Personal */}
      <section id="negocio-personal" className=" text-gray-600 py-16  border-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Gestión de Negocio Personal</h2>
          
          {/* Subsección de Inventario */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Inventario</h3>
            <p className="text-lg">
              Gestiona el inventario de productos en caso de tener un negocio con productos físicos. Lleva un control preciso de tu stock.
            </p>
          </div>

          {/* Subsección de Contabilidad Comercial */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Contabilidad Comercial</h3>
            <p className="text-lg">
              Administra las finanzas de tu negocio, incluyendo registros de ventas y gastos. Mantén tus cuentas claras y organizadas.
            </p>
          </div>

          {/* Aquí puedes agregar un botón para comenzar o más contenido */}
        </div>
      </section>

      {/* Sección de Optimización del Hogar */}
      <section id="hogar" className="bg-quinary text-gray-600 py-16  border-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Optimización del Hogar</h2>
          
          {/* Subsección de Consumo Doméstico */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Consumo Doméstico</h3>
            <p className="text-lg">
              Realiza un seguimiento del consumo de alimentos y recursos en el hogar. Planifica tus compras de manera eficiente.
            </p>
          </div>

          {/* Subsección de Tareas Domésticas */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Tareas Domésticas</h3>
            <p className="text-lg">
              Gestionas las tareas y actividades en el hogar. Mantén tu hogar organizado y eficiente.
            </p>
          </div>

          {/* Aquí puedes agregar un botón para comenzar o más contenido */}
        </div>
      </section>

      {/* Sección de Informes y Análisis */}
      <section id="informes" className=" text-gray-600 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Informes y Análisis</h2>
          
          {/* Subsección de Informe de Gastos */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Informe de Gastos</h3>
            <p className="text-lg">
              Accede a informes detallados sobre gastos personales o comerciales. Comprende mejor tus finanzas con análisis exhaustivos.
            </p>
          </div>

          {/* Subsección de Informe de Rendimiento */}
          <div className="mb-8 p-4 bg-secondary hover:bg-gray-300 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Informe de Rendimiento</h3>
            <p className="text-lg">
              Obtén informes sobre el rendimiento financiero y estadísticas relevantes. Toma decisiones informadas para mejorar tu calidad de vida.
            </p>
          </div>

          {/* Aquí puedes agregar un botón para ver más informes o más contenido */}
        </div>
      </section>
    </div>
  </>
  );
}

export default HomePage;
