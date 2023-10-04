  import dynamic from 'next/dynamic'
  
  export const Profile = dynamic(()=> import('./Profile'));
  export const Agenda = dynamic(()=> import('./DiaryComponent'));
  export const Laboral = dynamic(()=> import('./DiaryComponent'))
  export const Finanzas = dynamic(()=> import('./DiaryComponent'))
  export const Notas = dynamic(()=> import('./DiaryComponent'))
  export const Inventario = dynamic(()=> import('./DiaryComponent'))
  export const Contabilidad = dynamic(()=> import('./DiaryComponent'))
  export const Rentabilidad = dynamic(()=> import('./DiaryComponent'))
  export const Consumo = dynamic(()=> import('./DiaryComponent'))
  export const Mantenimiento = dynamic(()=> import('./DiaryComponent'))
  export const Gastos = dynamic(()=> import('./DiaryComponent'))
  export const Informes = dynamic(()=> import('./DiaryComponent'))
  export const Rendimiento = dynamic(()=> import('./DiaryComponent'))
  export const Optimizacion = dynamic(()=> import('./DiaryComponent'))
  export const Otros = dynamic(()=> import('./DiaryComponent'))