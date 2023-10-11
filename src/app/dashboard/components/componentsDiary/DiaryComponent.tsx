"use client";
import React, { useState, useEffect } from "react";
import { FormDiary, FormTask, FormNotas } from "./components/Forms";
import { ButtonsDairy } from "./components/ButtonsDiary";
import ShowList from "./components/ShowList";
import axios from "axios";
import { URL_SERVER } from "@/libs/config";
import { eventDataMongoDb } from "@/types/interfaces";

export default function DiaryComponent() {
  const [eventDataEdit, setEventDataEdit] = useState<eventDataMongoDb>()
  const [isEditing, setIsEditing] = useState(false)
  const [activeComponent, setActiveComponent] = useState("");
  const [componentsShowList, setComponentsShowList] = useState("");
  const [eventData, setEventData] = useState<eventDataMongoDb[]>([]);

  const loadList = async () => {
    try {
      const res = await axios
      .get(`${URL_SERVER}/api/dashboard/diary/events`, {
        withCredentials: true,
      })
      setEventData(res.data)
    } catch (error) {
      console.log(error)
    }
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
          console.log("El evento se registro con exito!")
        }else {
          console.log("No se pudo registrar el evento por favor verifique los datos")
        }
        loadList();
      } catch (error) {
        console.log(error);
      }
    };
    
    // editar un evento existente
    const onSubmitEditEvent = async (eventData: eventDataMongoDb)=>{

      const res = await axios.put(`${URL_SERVER}/api/dashboard/diary/events?user=${eventDataEdit?.userId}&event=${eventDataEdit?._id}`, {
        title: eventData.title,
        description: eventData.description,
        Date: eventData.Date,
        required: eventData.required,
        Time: eventData.Time,
        category: eventData.category,
      }, {withCredentials: true})

      if (res.status === 200) {
        console.log('evento editado satifactoriamente')
      }

      loadList()
    
      setIsEditing(false)
    }

    const handleSubmitTask = (taskData: any) => {
      console.log(taskData);
    };
  const handleSubmitNotes = (notesData: any) => {
    console.log(notesData);
  };

  const renderComponents = () => {
    switch (activeComponent) {
      case "eventos":
        return <FormDiary onSubmitEvent={handleSubmitEvent} onSubmitEditEvent={onSubmitEditEvent} isEditing={isEditing} cancelEdit={cancelEdit} eventDataEdit={eventDataEdit} />;
      case "tareas":
        return <FormTask onSubmitTask={handleSubmitTask} />;
      case "notas":
        return <FormNotas onSubmitNotas={handleSubmitNotes} />;
      default:
        break;
    }
  };

  const renderList = ()=>{
    switch (componentsShowList) {
      case "eventos":
        return <ShowList loadList={loadList} eventData={eventData} eventEdit={eventEdit}/>;
      case "tareas":
        return "";
      case "notas":
        return "";
      default:
        break;
    }
  }

  const handleComponent = (key: string) => {
    setActiveComponent(key);
    setComponentsShowList(key)
  };

  const eventEdit = async (event: eventDataMongoDb)=>{
    setIsEditing(true)
    setEventDataEdit(event)
  }

  const cancelEdit = ()=>{
    setIsEditing(false)
  }


  return (
    <div className="container mx-auto flex space-x-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <section className="w-auto max-w-min p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="flex flex-wrap gap-4">
          <ButtonsDairy handleComponent={handleComponent} />
          {renderComponents()}
        </div>
      </section>
      <section className="w-2/3 p-4 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-red-600">
        <div>
          {renderList()}
        </div>
      </section>
    </div>
  );
}
