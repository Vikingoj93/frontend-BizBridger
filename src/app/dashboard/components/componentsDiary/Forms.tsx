import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  validateDateForm,
  validateCategoryForm,
  validateTimeForm,
  validateTitleFrom,
  validateDescriptionFrom,
  validateMaxLength,
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

  const Data: eventData = {
    title: eventData.title.trim(),
    description: eventData.description.trim(),
    Date: eventData.Date,
    required: eventData.required,
    Time: eventData.Time,
    category: eventData.category,
  };

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date().toJSON().slice(0, 10);

    // Realiza la validación en el título recortado
    if (!validateTitleFrom(Data.title)) {
      alert("El título debe contener caracteres válidos.");
      return;
    }

    if (validateMaxLength(40, Data.title.length)) {
      alert("El titulo debe contener maximo 40 caracteres");
      return;
    }

    if (!validateDescriptionFrom(Data.description)) {
      alert("La description debe contener caracteres válidos.");
      return;
    }
    if (validateMaxLength(250, Data.description.length)) {
      alert("La descripcion debe contener maximo 250 caracteres");
      return;
    }

    if (!validateDateForm(Data.Date)) {
      alert("la Fecha del evento debe ser superior a la fecha actual");
      return;
    }

    if (Data.Date === currentDate) {
      if (Data.Time) {
        if (!validateTimeForm(Data.Time)) {
          alert("La hora del evento debe ser superior a la hora actual");
          return;
        }
      }
    }

    if (validateCategoryForm(Data.category)) {
      alert("Debe seleccionar una categoria para su evento");
      return;
    }

    onSubmitDiary(Data);
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
    required: false,
    Date: null,
    category: "",
  });

  const Data: taskData = {
    title: taskData.title.trim(),
    description: taskData.description.trim(),
    required: taskData.required,
    Date: taskData.Date,
    category: taskData.category,
  };

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

    if (!validateTitleFrom(Data.title)) {
      alert("El titulo debe contener caracteres validos.");
      return;
    }

    if (validateMaxLength(40, Data.title.length)) {
      alert("El titulo debe contener maximo 40 caracteres");
      return;
    }

    if (!validateDescriptionFrom(Data.description)) {
      alert("La descripcion debe contener caracteres validos.");
      return;
    }
    if (validateMaxLength(250, Data.description.length)) {
      alert("La descripcion debe contener maximo 250 caracteres");
      return;
    }

    if (Data.Date && Data.required) {
      if (!validateDateForm(Data.Date)) {
        alert("La fecha para la tarea debe ser superior a la fecha actual");
        return;
      }
    }

    if (validateCategoryForm(Data.category)) {
      alert("Debe seleccionar una categoria para su tarea");
      return;
    }
    onSubmitTask(Data);
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

  const Data: noteData = {
    description: noteData.description.trim(),
    category: noteData.category.trim(),
  };

  const EventHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChange(e, setNoteData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateDescriptionFrom(Data.description)) {
      alert("La descripcion debe contener caracteres validos");
      return;
    }

    if (validateMaxLength(250, Data.description.length)) {
      alert("La descripcion debe contener maximo 250 caracteres");
      return;
    }

    if (validateCategoryForm(Data.category)) {
      alert("Debe seleccionar una categoria para su nota");
      return;
    }

    onSubmitNotas(Data);
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