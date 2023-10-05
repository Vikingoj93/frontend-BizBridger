import React, { ChangeEvent, FormEvent, useState } from "react";

export function FormDiary({ onSubmitDiary }: { onSubmitDiary: any }) {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    eventDate: "",
    requiresTime: true,
    timeDate: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setEventData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setEventData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitDiary(eventData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Título del evento</label>
        <input
          type="text"
          id="title"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Descripción del evento</label>
        <textarea
          id="description"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div>
      <div>
        <label className="mr-1" htmlFor="eventDate">Fecha del evento</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={eventData.eventDate}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="requiresTime"
            checked={eventData.requiresTime}
            onChange={handleChange}
            className="mr-2"
          />{" "}
          ¿Requiere una hora para el evento?
        </label>
      </div>
      {eventData.requiresTime && (
        <div>
          <label htmlFor="timeDate">Hora:</label>
          <input
            type="time"
            id="timeDate"
            name="timeDate"
            value={eventData.timeDate}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
      )}
      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={eventData.category}
          onChange={handleChange}
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        >
          <option value="trabajo">Trabajo</option>
          <option value="hogar">Hogar</option>
          <option value="otro">Otro</option>
        </select>
      </div>

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
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    category: "",
    requiresTime: false,
    eventDate: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setEventData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setEventData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitTask(eventData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="title">Título del evento</label>
        <input
          type="text"
          id="title"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Descripción del evento</label>
        <textarea
          id="description"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div><div>
        <label>
          <input
            type="checkbox"
            name="requiresTime"
            checked={eventData.requiresTime}
            onChange={handleChange}
            className="mr-2"
          />{" "}
          ¿Requiere una fecha para la tarea?
        </label>
      </div>
      {eventData.requiresTime && (
        <div>
          <label htmlFor="eventDate">Fecha:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={eventData.category}
          onChange={handleChange}
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        >
          <option value="trabajo">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="personal">Otros</option>
        </select>
      </div>

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
  const [eventData, setEventData] = useState({
    description: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setEventData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setEventData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitNotas(eventData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gradient-to-r from-purple-600 to-pink-600 border border-white my-4 py-4 px-2 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="description">Descripción de la nota</label>
        <textarea
          id="description"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          required
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        />
      </div>
            
      <div>
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={eventData.category}
          onChange={handleChange}
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
        >
          <option value="trabajo">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-sm text-white font-bold bg-green-400 hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Guardar
      </button>
    </form>
  );
}
