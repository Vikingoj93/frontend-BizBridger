  import dynamic from 'next/dynamic'
  
  export const Profile = dynamic(()=> import('./Profile'));
  export const Agenda = dynamic(()=> import('./DiariComponent'));
  export const Laboral = dynamic(()=> import('./DiariComponent'))
  export const Finanzas = dynamic(()=> import('./DiariComponent'))
  export const Notas = dynamic(()=> import('./DiariComponent'))
  export const Inventario = dynamic(()=> import('./DiariComponent'))
  export const Contabilidad = dynamic(()=> import('./DiariComponent'))
  export const Rentabilidad = dynamic(()=> import('./DiariComponent'))
  export const Consumo = dynamic(()=> import('./DiariComponent'))
  export const Mantenimiento = dynamic(()=> import('./DiariComponent'))
  export const Gastos = dynamic(()=> import('./DiariComponent'))
  export const Informes = dynamic(()=> import('./DiariComponent'))
  export const Rendimiento = dynamic(()=> import('./DiariComponent'))
  export const Optimizacion = dynamic(()=> import('./DiariComponent'))
  export const Otros = dynamic(()=> import('./DiariComponent'))