"use client";
import React, { useState, useEffect } from "react";
import { FormEvent, FormTask, FormNotas } from "./components/Forms";
import { ButtonsDairy } from "./components/ButtonsDiary";
import ShowList from "./components/ShowList";
import axios from "axios";
import { URL_SERVER } from "@/libs/config";
import { eventDataMongoDb } from "@/types/interfaces";

export default function DiaryComponent() {
  //componentes para renderizar componentes
  const [activeComponent, setActiveComponent] = useState("");
  const [componentsShowList, setComponentsShowList] = useState("");

  // estados para manjedar cuanto se este editando algun evento,tarea,nota
  const [isEditing, setIsEditing] = useState(false);
  const [eventDataEdit, setEventDataEdit] = useState<eventDataMongoDb>();

  //interfaces de estados
  const [eventData, setEventData] = useState<eventDataMongoDb[]>([]);
  const [taskData, setTaskData] = useState<eventDataMongoDb[]>([]);
  const [noteData, setNoteData] = useState<eventDataMongoDb[]>([]);

  //cargar listas para mostrar
  const loadList = async (event: string, setData: any) => {
    try {
      const res = await axios.get(
        `${URL_SERVER}/api/dashboard/diary/${event}`,
        {
          withCredentials: true,
        }
      );

      setData("");
      setData(res.data);
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
    return;
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
      loadList("events", setEventData);
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

    loadList("events", setEventData);

    setIsEditing(false);
  };

  // eliminar un evento existente
  const handleDelete = async (event: eventDataMongoDb) => {
    const res = await axios.delete(
      `${URL_SERVER}/api/dashboard/diary/events?user=${event?.userId}&event=${event?._id}`,
      { withCredentials: true }
    );
    loadList("events", setEventData);
    console.log(res);
  };

  // crear una nueva tarea
  const handleSubmitTask = async (taskData: eventDataMongoDb) => {
    try {
      const res = await axios.post(
        `${URL_SERVER}/api/dashboard/diary/tasks`,
        {
          title: taskData.title,
          description: taskData.description,
          category: taskData.category,
          Date: taskData.Date,
          required: taskData.required,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        console.log("La tarea se registro con Exito!");
      } else {
        console.log(
          "No se pudo registrar la tarea por favor verifique los datos"
        );
      }
      loadList("tasks", setTaskData);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitEditTask = async (eventData: eventDataMongoDb) => {
    const res = await axios.put(
      `${URL_SERVER}/api/dashboard/diary/tasks?user=${eventDataEdit?.userId}&task=${eventDataEdit?._id}`,
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

    loadList("tasks", setTaskData);

    setIsEditing(false);
  };

  const handleDeleteTask = async (event: eventDataMongoDb) => {
    const res = await axios.delete(
      `${URL_SERVER}/api/dashboard/diary/tasks?user=${event?.userId}&task=${event?._id}`,
      { withCredentials: true }
    );
    loadList("tasks", setTaskData);
  };

  const handleSubmitNote = async (notesData: eventDataMongoDb) => {
    try {
      const res = await axios.post(
        `${URL_SERVER}/api/dashboard/diary/notes`,
        {
          description: notesData.description,
          category: notesData.category,
          Date: notesData.Date
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        console.log("La nota se registro con Exito!");
      } else {
        console.log(
          "No se pudo registrar la nota por favor verifique los datos"
        );
      }
      loadList("notes", setNoteData);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitEditNote = async (notesData: eventDataMongoDb) => {
    const res = await axios.put(
      `${URL_SERVER}/api/dashboard/diary/notes?user=${eventDataEdit?.userId}&note=${eventDataEdit?._id}`,
      {
        description: notesData.description,
        category: notesData.category,
      },
      { withCredentials: true }
    );

    if (res.status === 200) {
      console.log("tarea editada satifactoriamente");
    }

    loadList("Notes", setNoteData);

    setIsEditing(false);
  };

  const handleDeleteNote = async (note: eventDataMongoDb) => {
    const res = await axios.delete(
      `${URL_SERVER}/api/dashboard/diary/notes?user=${note?.userId}&note=${note?._id}`,
      { withCredentials: true }
    );
    loadList("notes", setNoteData);
    console.log(res);
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
          />
        );
      case "tareas":
        return (
          <FormTask
            onSubmitTask={handleSubmitTask}
            cancelEdit={cancelEdit}
            isEditing={isEditing}
            onSubmitEditTask={onSubmitEditTask}
            taskDataEdit={eventDataEdit}
          />
        );
      case "notas":
        return (
          <FormNotas
            onSubmitNote={handleSubmitNote}
            cancelEdit={cancelEdit}
            isEditing={isEditing}
            noteDataEdit={eventDataEdit}
            onSubmitEditNote={onSubmitEditNote}
          />
        );
      default:
        break;
    }
  };

  const renderList = () => {
    switch (componentsShowList) {
      case "eventos":
        return (
          <ShowList
            setData={setEventData}
            loadList={loadList}
            eventData={eventData}
            eventEdit={eventEdit}
            handleDelete={handleDelete}
            string={"events"}
          />
        );
      case "tareas":
        return (
          <ShowList
            setData={setTaskData}
            loadList={loadList}
            eventData={taskData}
            eventEdit={eventEdit}
            handleDelete={handleDeleteTask}
            string={"tasks"}
          />
        );
      case "notas":
        return (
          <ShowList
            setData={setNoteData}
            loadList={loadList}
            eventData={noteData}
            eventEdit={eventEdit}
            handleDelete={handleDeleteNote}
            string={"notes"}
          />
        );
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
