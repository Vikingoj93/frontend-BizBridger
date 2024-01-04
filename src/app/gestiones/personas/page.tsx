
function GestionPersonal() {

  const colorsBase = {
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-pink-600'
  }
  const colorsCard = {
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-red-600'
  }

  return (
    <div className={`bg-gradient-to-r ${colorsBase.gradientFrom} ${colorsBase.gradientTo} flex`}>
      <section className={`container bg-gradient-to-r ${colorsCard.gradientFrom} ${colorsCard.gradientTo} mx-auto p-12 rounded-lg `}>
        <h2 className="text-3xl font-semibold text-white mb-6">
          Simplifica tu Vida Cotidiana con BizBridger
        </h2>
        <p className="text-white  mb-6">
          BizBridger es tu compañero personal para simplificar y organizar todos
          los aspectos de tu vida cotidiana. Desde tareas y finanzas personales
          hasta la gestión de documentos y proyectos personales, BizBridger te
          ayuda a mantener todo bajo control.
        </p>

        {/* Descripción Extendida */}
        <div className={`bg-gradient-to-r ${colorsCard.gradientFrom} ${colorsCard.gradientTo} rounded-lg shadow-lg p-6 mb-10 text-white`}>
          <p className="text-lg text-white mb-2">
            ¿Necesitas llevar un control meticuloso de tu día a día? BizBridger
            es la solución perfecta. Puedes gestionar tus tareas, actividades,
            trabajos, rutinas, comidas y finanzas personales en un solo lugar.
            Registra tus gastos, deudas, pagos y mantén un registro de tus ideas
            y proyectos. Simplifica tu vida cotidiana y maximiza tu
            productividad con BizBridger.
          </p>
          <p className="text-lg text-white mb-2">
            Además, BizBridger utiliza la última tecnología de inteligencia
            artificial para ofrecerte recomendaciones personalizadas en todas
            las áreas de tu vida. Nuestro sistema de IA analiza tus datos y
            patrones para sugerirte tareas pendientes, ideas de negocio, compras
            de alimentos y más. Obtén consejos inteligentes para tomar
            decisiones informadas y mejorar tu calidad de vida.
          </p>
          {/* Agregar más detalles aquí si es necesario */}
        </div>

        {/* Ejemplos de Casos de Uso */}
        <div className={`bg-gradient-to-r ${colorsCard.gradientFrom} ${colorsCard.gradientTo} rounded-lg shadow-lg p-6 text-white`}>
          <h3 className="text-2xl font-semibold mb-4">Casos de Uso</h3>

          {/* Agregar aquí los otros ejemplos de casos de uso */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className={`bg-gradient-to-r ${colorsCard.gradientFrom} ${colorsCard.gradientTo} p-6 rounded-lg shadow-lg`}>
                <h4 className="text-xl font-semibold mb-2">Planificación de Tareas Diarias</h4>
                <p className="text-lg text-white">
                  Ana se siente abrumada por la cantidad de tareas que tiene que
                  realizar en su día. Con BizBridger, puede ingresar todas sus
                  tareas en un solo lugar, establecer recordatorios y prioridades,
                  y recibir notificaciones para mantenerse organizada.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className={`bg-gradient-to-r ${colorsCard.gradientFrom} ${colorsCard.gradientTo} p-6 rounded-lg shadow-lg`}>
                <h4 className="text-xl font-semibold mb-2">Gastos Imprevistos</h4>
                <p className="text-lg text-white">
                  Juan recibe una factura inesperada que olvidó pagar. Con
                  BizBridger, puede llevar un registro de sus gastos y establecer
                  presupuestos. La aplicación le alerta cuando se acerca a su
                  límite de gastos, evitando sorpresas desagradables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GestionPersonal;
