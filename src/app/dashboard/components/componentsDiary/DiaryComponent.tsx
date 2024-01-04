"use client";
import React, { useState, useEffect } from "react";
import { FormEvent, FormTask, FormNotas } from "./components/Forms";
import { ButtonsDairy } from "./components/ButtonsDiary";
import ShowList from "./components/ShowList";
import axios from "axios";
import { URL_SERVER } from "@/libs/config";
import { eventDataMongoDb, taskDataMongoDb } from "@/types/interfaces";

export default function DiaryComponent() {

  //componentes para renderizar componentes
  const [activeComponent, setActiveComponent] = useState("");
  const [componentsShowList, setComponentsShowList] = useState("");


  // estados para manjedar cuanto se este editando algun evento,tarea,nota
  const [isEditing, setIsEditing] = useState(false);
  const [eventDataEdit, setEventDataEdit] = useState<eventDataMongoDb>();
  const [taskDataEdit, setTaskDataEdit] = useState<taskDataMongoDb>();
  

  //interfaces de estados
  const [eventData, setEventData] = useState<eventDataMongoDb[]>([]);
  const [taskData, setTaskData] = useState<taskDataMongoDb[]>([]);

  const loadList = async (event: string) => {
    try {
      const res = await axios.get(`${URL_SERVER}/api/dashboard/diary/${event}`, {
        withCredentials: true,
      });
      setEventData(res.data);
    } catch (error) {
      console.log(error);
    }
    return
  };

  // crear un nuevo evento
  const handleSubmitEvent = async (eventData: eventDataMongoDb) => {
    try {
      const res = await axios.post(
        `${URL_SERVER}/api/dashboard/diary/events`,
        {
          title: eventData.title,
          description: eventData.description,
          Date: eventData.Date,
          required: eventData.required,
          Time: eventData.Time,
          category: eventData.category,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        console.log("El evento se registro con exito!");
      } else {
        console.log(
          "No se pudo registrar el evento por favor verifique los datos"
        );
      }
      loadList("events");
    } catch (error) {
      console.log(error);
    }
  };

  // editar un evento existente
  const onSubmitEditEvent = async (eventData: eventDataMongoDb) => {
    const res = await axios.put(
      `${URL_SERVER}/api/dashboard/diary/events?user=${eventDataEdit?.userId}&event=${eventDataEdit?._id}`,
      {
        title: eventData.title,
        description: eventData.description,
        Date: eventData.Date,
        required: eventData.required,
        Time: eventData.Time,
        category: eventData.category,
      },
      { withCredentials: true }
    );

    if (res.status === 200) {
      console.log("evento editado satifactoriamente");
    }

    loadList('events');

    setIsEditing(false);
  };

  // eliminar un evento existente
  const handleDelete = async (event: eventDataMongoDb) => {
    const res = await axios.delete(
      `${URL_SERVER}/api/dashboard/diary/events?user=${event?.userId}&event=${event?._id}`, {withCredentials: true})
      loadList('events')
      console.log(res)
  };

  // crear una nueva tarea
  const handleSubmitTask = (taskData: any) => {
    console.log(taskData);
  };

  const onSubmitEditTask = ()=>{
  return
  }

 
  const handleSubmitNotes = (notesData: any) => {
    console.log(notesData);
  };

  const renderComponents = () => {
    switch (activeComponent) {
      case "eventos":
        return (
          <FormEvent
            onSubmitEvent={handleSubmitEvent}
            onSubmitEditEvent={onSubmitEditEvent}
            isEditing={isEditing}
            cancelEdit={cancelEdit}
            eventDataEdit={eventDataEdit}
            loadList={loadList} 
          />
        );
      case "tareas":
        return <FormTask onSubmitTask={handleSubmitTask} cancelEdit={cancelEdit} isEditing={isEditing} onSubmitEditTask={onSubmitEditTask} taskDataEdit={taskDataEdit} loadList={loadList} />;
      case "notas":
        return <FormNotas onSubmitNotas={handleSubmitNotes} />;
      default:
        break;
    }
  };

  const renderList = () => {
    switch (componentsShowList) {
      case "eventos":
        return (
          <ShowList
            loadList={loadList}
            eventData={eventData}
            eventEdit={eventEdit}
            handleDelete={handleDelete}
          />
        );
      case "tareas":
        return "";
      case "notas":
        return "";
      default:
        break;
    }
  };

  const handleComponent = (key: string) => {
    setActiveComponent(key);
    setComponentsShowList(key);
  };

  const eventEdit = async (event: eventDataMongoDb) => {
    setIsEditing(true);
    setEventDataEdit(event);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto flex space-x-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <section className="w-auto  max-w-min p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="flex flex-wrap gap-4">
          <ButtonsDairy handleComponent={handleComponent} />
          {renderComponents()}
        </div>
      </section>
      <section className="w-2/3 p-4 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-red-600">
        <div>{renderList()}</div>
      </section>
    </div>
  );
}
