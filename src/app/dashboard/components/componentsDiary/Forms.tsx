import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  validateDateForm,
  validateCategoryForm,
  validateTimeForm,
} from "@/libs/validate";
import { eventData, taskData, noteData } from "@/types/interfaces";
import {
  InputCategory,
  InputCheckbox,
  InputDate,
  InputDescription,
  InputTime,
  InputTitle,
} from "../InputsForms";

const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  setData: React.Dispatch<React.SetStateAction<any>>
) => {
  const { name, value, type } = e.target;

  if (type === "checkbox") {
    setData((prevData: any) => ({
      ...prevData,
      [name]: (e.target as HTMLInputElement).checked,
    }));
  } else {
    setData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

export function FormDiary({ onSubmitDiary }: { onSubmitDiary: any }) {
  const [eventData, setEventData] = useState<eventData>({
    title: "",
    description: "",
    Date: new Date().toJSON().slice(0, 10),
    required: false,
    Time: null,
    category: "",
  });

  const EventHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChange(e, setEventData);
  };

  useEffect(() => {
    if (!eventData.required) {
      setEventData((prevData) => ({
        ...prevData,
        Time: null,
      }));
    }
  }, [eventData.required]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate);

    if (!validateDateForm(eventData.Date)) {
      alert("la Fecha del evento debe ser superior a la fecha actual");
      return;
    }

    if (eventData.Date === currentDate) {
      if (eventData.Time) {
        if (!validateTimeForm(eventData.Time)) {
          alert("La hora del evento debe ser superior a la hora actual");
          return;
        }
      }
    }

    if (validateCategoryForm(eventData.category)) {
      alert("Debe seleccionar una categoria para su evento");
      return;
    }

    onSubmitDiary(eventData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <InputTitle
        data={eventData.title}
        handleChange={EventHandleChange}
        label={"Titulo de evento"}
      />

      <InputDescription
        data={eventData.description}
        handleChange={EventHandleChange}
        label={"Descripcion del evento"}
      />
      <InputDate
        data={eventData.Date}
        handleChange={EventHandleChange}
        label={"Fecha para el evento"}
      />
      <InputCheckbox
        data={eventData.required}
        handleChange={EventHandleChange}
        label={"¿Requiere una hora para el evento?"}
      />
      {eventData.required && (
        <InputTime
          data={eventData.Time === null ? "" : eventData.Time}
          handleChange={EventHandleChange}
          label={"Hora:"}
        />
      )}

      <InputCategory
        data={eventData.category}
        handleChange={EventHandleChange}
      />

      <button
        type="submit"
        className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Guardar
      </button>
    </form>
  );
}

export function FormTask({ onSubmitTask }: { onSubmitTask: any }) {
  const [taskData, setTaskData] = useState<taskData>({
    title: "",
    description: "",
    category: "",
    required: false,
    Date: null,
  });

  const EventHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChange(e, setTaskData);
  };

  useEffect(() => {
    if (!taskData.required) {
      setTaskData((prevData) => ({
        ...prevData,
        Date: null,
      }));
    }
    if (taskData.required) {
      setTaskData((prevData) => ({
        ...prevData,
        Date: new Date().toJSON().slice(0, 10),
      }));
    }
  }, [taskData.required]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskData.Date && taskData.required) {
      if (!validateDateForm(taskData.Date)) {
        alert("La fecha para la tarea debe ser superior a la fecha actual");
        return;
      }
    }

    if (validateCategoryForm(taskData.category)) {
      alert("Debe seleccionar una categoria para su tarea");
      return;
    }
    onSubmitTask(taskData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <InputTitle
        data={taskData.title}
        handleChange={EventHandleChange}
        label={"Titulo para la tarea"}
      />
      <InputDescription
        data={taskData.description}
        handleChange={EventHandleChange}
        label={"Descripcion para la tarea"}
      />
      <InputCheckbox
        data={taskData.required}
        handleChange={EventHandleChange}
        label={"¿Requiere una fecha para la tarea?"}
      />
      {taskData.required && (
        <InputDate
          data={taskData.Date === null ? "" : taskData.Date}
          handleChange={EventHandleChange}
          label={"Fecha:"}
        />
      )}

      <InputCategory
        data={taskData.category}
        handleChange={EventHandleChange}
      />

      <button
        type="submit"
        className="text-sm text-white font-bold bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Guardar
      </button>
    </form>
  );
}

export function FormNotas({ onSubmitNotas }: { onSubmitNotas: any }) {
  const [noteData, setNoteData] = useState<noteData>({
    description: "",
    category: "",
  });

  const EventHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChange(e, setNoteData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateCategoryForm(noteData.category)) {
      alert("Debe seleccionar una categoria para su nota");
      return;
    }

    onSubmitNotas(noteData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <InputDescription
        data={noteData.description}
        handleChange={EventHandleChange}
        label={"Description para la nota"}
      />

      <InputCategory
        data={noteData.category}
        handleChange={EventHandleChange}
      />

      <button
        type="submit"
        className="text-sm text-white font-bold bg-green-400 hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Guardar
      </button>
    </form>
  );
}
