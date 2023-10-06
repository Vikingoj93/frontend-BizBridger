"use client";
import React, { useState } from "react";
import { FormDiary, FormTask, FormNotas } from "./Forms";
import { ButtonsDairy } from "./ButtonsDiary";

export default function DiaryComponent() {
  const handleSubmitDiary = (eventData: any) => {

    console.log(eventData);
  };
  const handleSubmitTask = (eventData: any) => {
    console.log(eventData);
  };
  const handleSubmitNotas = (eventData: any) => {
    console.log(eventData);
  };

  
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponents = () => {
    switch (activeComponent) {
      case "eventos":
        return <FormDiary onSubmitDiary={handleSubmitDiary} /> ;
      case "tareas":
        return <FormTask onSubmitTask={handleSubmitTask} /> ;
      case "notas":
        return <FormNotas onSubmitNotas={handleSubmitNotas} /> ;
      default:
        break;
    }
  };


  const handleComponent = (key: any) => {
    setActiveComponent(key);
  };

  return (
    <div className="container mx-auto flex space-x-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <section className="w-auto max-w-min p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="flex flex-wrap gap-4">

        <ButtonsDairy handleComponent={handleComponent}/>
      {renderComponents()}
        </div>
      </section>
      <section className="w-2/3 p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-red-600">
        <div>
          <h1 className="text-3xl text-white font-bold mb-2">
            Lista de Pendientes
          </h1>
        </div>
      </section>
    </div>
  );
}
