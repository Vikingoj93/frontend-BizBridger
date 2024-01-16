import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {
  validateDateForm,
  validateCategoryForm,
  validateTimeForm,
  validateTitleFrom,
  validateDescriptionFrom,
  validateMaxLength,
} from "@/libs/validate";
import {
  eventData,
  taskData,
  noteData,
  eventDataMongoDb,
  taskDataMongoDb,
  noteDataMongoDb
} from "@/types/interfaces";
import {
  InputCategory,
  InputCheckbox,
  InputDate,
  InputDescription,
  InputTime,
  InputTitle,
} from "../../InputsForms";
import { date, hours } from "@/libs/config";

const dataReset = {
  title: "",
  description: "",
  Date: date,
  required: false,
  Time: null,
  category: "",
};

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

export function FormEvent({
  onSubmitEvent,
  onSubmitEditEvent,
  isEditing,
  cancelEdit,
  eventDataEdit
}: {
  onSubmitEvent: any;
  onSubmitEditEvent: any;
  isEditing: any;
  cancelEdit: any;
  eventDataEdit: eventDataMongoDb | undefined,
}) {


  useEffect(() => {
    if (isEditing) {
      if (eventDataEdit) {
        setEventData(eventDataEdit);
      }
    } else {
      setEventData(dataReset);
    }
  }, [isEditing]);

  const [eventData, setEventData] = useState<eventData>({
    title: "",
    description: "",
    Date: date,
    required: false,
    Time: null,
    category: "",
  });

  const Data = {
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

    const currentDate = date;

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

    if (isEditing) {
      onSubmitEditEvent(eventData);
      setEventData(dataReset);
    } else {
      onSubmitEvent(Data);
    }
  };

  return (
    <form
      method="post"
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

      {isEditing ? (
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Actualizar
          </button>
          <button
            type="button"
            className="text-sm text-white font-bold bg-red-400 hover:bg-red-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => {
              cancelEdit();
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Guardar
        </button>
      )}
    </form>
  );
}

export function FormTask({
  onSubmitTask,
  onSubmitEditTask,
  isEditing,
  cancelEdit,
  taskDataEdit
}: {
  onSubmitTask: any;
  isEditing: any;
  onSubmitEditTask: any;
  cancelEdit: any;
  taskDataEdit: taskDataMongoDb | undefined,
  
}) {

  useEffect(() => {
    if (isEditing) {
      if (taskDataEdit) {
        setTaskData(taskDataEdit);
      }
    } else {
      setTaskData(dataReset);
    }
  }, [isEditing]);

  const [taskData, setTaskData] = useState<taskData>({
    title: "",
    description: "",
    required: true,
    Date: date,
    category: "",
  });

  const Data = {
    title: taskData.title.trim(),
    description: taskData.description.trim(),
    required: true,
    Date: taskData.Date,
    category: taskData.category,
  };

  const EventHandleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleChange(e, setTaskData);
  };

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
    
    if (isEditing) {
      onSubmitEditTask(taskData);
      setTaskData(dataReset);
    } else {
      onSubmitTask(Data);
    }

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

      <InputCategory
        data={taskData.category}
        handleChange={EventHandleChange}
      />

{isEditing ? (
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Actualizar
          </button>
          <button
            type="button"
            className="text-sm text-white font-bold bg-red-400 hover:bg-red-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => {
              cancelEdit();
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Guardar
        </button>
      )}

    </form>
  );
}

export function FormNotas({
  onSubmitNote,
  onSubmitEditNote,
  isEditing,
  cancelEdit,
  noteDataEdit
}: {
  onSubmitNote: any;
  isEditing: any;
  onSubmitEditNote: any;
  cancelEdit: any;
  noteDataEdit: noteDataMongoDb | undefined,
  
}) {
  const [noteData, setNoteData] = useState<noteData>({
    description: "",
    category: "",
    Date: date,
  });

  const Data = {
    description: noteData.description.trim(),
    category: noteData.category.trim(),
    
  Date: noteData.Date
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

    if (Data.Date) {
      if (!validateDateForm(Data.Date)) {
        alert("La fecha para la tarea debe ser superior a la fecha actual");
        return;
      }
    }

    if (validateMaxLength(250, Data.description.length)) {
      alert("La descripcion debe contener maximo 250 caracteres");
      return;
    }

    if (validateCategoryForm(Data.category)) {
      alert("Debe seleccionar una categoria para su nota");
      return;
    }

    onSubmitNote(Data);
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

{isEditing ? (
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Actualizar
          </button>
          <button
            type="button"
            className="text-sm text-white font-bold bg-red-400 hover:bg-red-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => {
              cancelEdit();
            }}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="text-sm text-white font-bold bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Guardar
        </button>
      )}
    </form>
  );
}
