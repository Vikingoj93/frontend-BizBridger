  import dynamic from 'next/dynamic'
  
  export const Profile = dynamic(()=> import('./Profile'));
  export const Agenda = dynamic(()=> import('./TaskComponent'));
  export const Laboral = dynamic(()=> import('./TaskComponent'))
  export const Finanzas = dynamic(()=> import('./TaskComponent'))
  export const Notas = dynamic(()=> import('./TaskComponent'))
  export const Inventario = dynamic(()=> import('./TaskComponent'))
  export const Contabilidad = dynamic(()=> import('./TaskComponent'))
  export const Rentabilidad = dynamic(()=> import('./TaskComponent'))
  export const Consumo = dynamic(()=> import('./TaskComponent'))
  export const Mantenimiento = dynamic(()=> import('./TaskComponent'))
  export const Gastos = dynamic(()=> import('./TaskComponent'))
  export const Informes = dynamic(()=> import('./TaskComponent'))
  export const Rendimiento = dynamic(()=> import('./TaskComponent'))
  export const Optimizacion = dynamic(()=> import('./TaskComponent'))
  export const Otros = dynamic(()=> import('./TaskComponent'))