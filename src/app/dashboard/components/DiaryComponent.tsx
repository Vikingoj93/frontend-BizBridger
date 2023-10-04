"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormDiary, FormTask } from "./Forms";

export default function DiaryComponent() {
  const handleSubmitDiary = (eventData: any) => {
    console.log(eventData);
  };

  return (
    <div className="container mx-auto flex space-x-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <section className="w-1/3 p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="flex space-x-4 items-center">
          <button className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            Eventos
          </button>
          <button className="text-sm text-white font-bold bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            Tareas
          </button>
          <button className="text-sm text-white font-bold bg-green-400 hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out">
            Otros
          </button>
        </div>
        <FormDiary onSubmitDiary={handleSubmitDiary} />
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
