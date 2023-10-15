"use client";
import { IPanel } from "@/types/interfaces";
import { useState } from 'react';

export default function Panel({ handleComponent }: { handleComponent: any }) {

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
    <div className=" flex flex-col bg-gradient-to-tlr from-purple-600 to-pink-600 text-white w-1/4 min-h-screen p-4">
      <section className="flex flex-col h-full">
        {buttons.map((item, index) => (
          <div className="mb-2" key={index}>
            {<h2 className={`text-xl font-semibold mb-2 w-min cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out ${selectedTitle === item.title ? 'hover:text-white' : 'text-purple-200 hover:text-white'}`} onClick={() => toggleButtons(item.title)}>
              {item.title}
            </h2>}

            {selectedTitle === item.title ? (
              <ul className="space-y-2">
                {Object.entries(item.buttons).map(
                  ([key, label], buttonIndex) => (
                    <li className="inline-block px-4 mx-2 py-2" key={buttonIndex}>
                      <button
                        className={`bg-purple-400 hover:bg-purple-500 text-white rounded-full px-4 py-2 shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out`}
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
      </section>
    </div>
  );
}
