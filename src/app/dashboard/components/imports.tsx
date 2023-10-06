  import dynamic from 'next/dynamic'

  //import panel  
  export const Profile = dynamic(()=> import('./Profile'));
  export const Agenda = dynamic(()=> import('./componentsDiary/DiaryComponent'));
  export const Laboral = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Finanzas = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Notas = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Inventario = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Contabilidad = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Rentabilidad = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Consumo = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Mantenimiento = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Gastos = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Informes = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Rendimiento = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Optimizacion = dynamic(()=> import('./componentsDiary/DiaryComponent'))
  export const Otros = dynamic(()=> import('./componentsDiary/DiaryComponent'))