"use client";
import { IPanel } from "@/types/interfaces";
import {useState} from 'react'
export default function Panel({handleComponent}:{handleComponent: any}) {


  const buttons: IPanel[] = [
    {
      title: 'Perfil',
      buttons: {
        perfil: 'Bienvenido'
      }
    },
    {
      title: "Personal",
      buttons: {
        agenda: "Agenda",
        laboral: "Laboral",
        finanzas: "Finanzas",
        notas: "Notas",
      },
    },
    {
      title: "Negocios",
      buttons: {
        inventario: "Inventario",
        contabilidad: "Contabilidad",
        rentabilidad: "Rentabilidad",
      },
    },
    {
      title: "Hogar",
      buttons: {
        consumo: "Consumo",
        mantenimiento: "Mantenimiento",
        gastos: "Gastos",
      },
    },
    {
      title: "Recursos",
      buttons: {
        informes: "Informes",
        rendimiento: "Rendimiento",
        optimizacion: "Optimizacion",
        otros: "Otros",
      },
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState("");

  const toggleButtons = (title: string) => {
    if (selectedTitle === title) {
      // Si se hace clic en el mismo título, oculta los botones
      setSelectedTitle("");
    } else {
      // Si se hace clic en un título diferente, muestra los botones
      setSelectedTitle(title);
    }
  };


  return (
    <div className="flex flex-col sm:flex-row bg-quinary">
        <section className="flex flex-col bg-quinary text-white border-r border-white w-64 min-h-screen p-4">
          <div className="flex flex-col h-full">
            {buttons.map((item, index) => (
              <div className="mb-2" key={index}>
                {<h2 className="text-xl font-semibold mb-2 w-min" onClick={() => toggleButtons(item.title)}> <span className="inline-block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-md transition duration-300 ease-in-out">
                {item.title}
                  </span></h2>}
                  
                {selectedTitle === item.title ? (
                  <ul className="space-y-2">
                    {Object.entries(item.buttons).map(
                      ([key, label], buttonIndex) => (
                        <li className="inline-block px-4 mx-2 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-md transition duration-300 ease-in-out" key={buttonIndex}>
                          <button
                            onClick={() => {
                              handleComponent(key);
                            }}
                          >
                            {label}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  null
                )}
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
