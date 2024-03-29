"use client";
import Panel from './components/panel'
import DashboardContext from "../../context/DashboardContext";
import {
  Agenda,
  Consumo,
  Contabilidad,
  Finanzas,
  Gastos,
  Informes,
  Inventario,
  Laboral,
  Mantenimiento,
  Notas,
  Optimizacion,
  Otros,
  Profile,
  Rendimiento,
  Rentabilidad,
} from "./components/imports";
import { useState } from "react";

export default function DashboardPage() {

  const [activeComponent, setActiveComponent] = useState<string>("perfil");

  const handleComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderComponents = ()=> {
    switch (activeComponent) {
      case "perfil":
        return <Profile />;
      case "agenda":
        return <Agenda />;
      case "laboral":
        return <Laboral />;
      case "finanzas":
        return <Finanzas />;
      case "notas":
        return <Notas />;
      case "inventario":
        return <Inventario />;
      case "contabilidad":
        return <Contabilidad />;
      case "rentabilidad":
        return <Rentabilidad />;
      case "consumo":
        return <Consumo />;
      case "mantenimiento":
        return <Mantenimiento />;
      case "gastos":
        return <Gastos />;
      case "informes":
        return <Informes />;
      case "rendimiento":
        return <Rendimiento />;
      case "optimizacion":
        return <Optimizacion />;
      case "otros":
        return <Otros />;
      default:
        break
    }
  };

  return (
    <div className="flex max-sm:h-full bg-gradient-to-r from-purple-600 to-pink-600">
      <DashboardContext>
       <Panel handleComponent={handleComponent} />
        {renderComponents()}
      </DashboardContext>
    </div>
  );
}
