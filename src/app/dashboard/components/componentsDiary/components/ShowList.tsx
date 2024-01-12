import { eventDataMongoDb } from "@/types/interfaces";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { date, hours } from "@/libs/config";
import Modal from "react-modal";
import "./custom.css";

Modal.setAppElement("#root");

export default function ShowList({
  loadList,
  eventData,
  eventEdit,
  handleDelete,
  setData,
  string,
}: {
  loadList: any;
  eventData: eventDataMongoDb[];
  eventEdit: any;
  handleDelete: any;
  setData: any;
  string: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [selectedDateOrder, setSelectedDateOrder] = useState("recientes");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(true);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<eventDataMongoDb | null>(
    null
  );

  useEffect(() => {
    loadList(string, setData);
    console.log(string);
  }, [string]);

  const openLightbox = (event: eventDataMongoDb) => {
    setSelectedEvent(event);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const filterEvents = eventData
    .filter((event) => {
      if (selectedCategory === "todas") {
        return true;
      } else {
        return event.category === selectedCategory;
      }
    })
    .filter((event) => {
      if (!selectedDate) {
        return true; // Mostrar todos los eventos si no se selecciona una fecha
      } else {
        // Convierte la fecha del evento a un objeto Date
        const eventDate = new Date(event.Date).toISOString().slice(0, 10);
        // Compara las fechas sin la hora
        const selectedDateWithoutTime = new Date(selectedDate)
          .toISOString()
          .slice(0, 10);

        // Compara si la fecha del evento es igual o posterior a la fecha seleccionada
        return eventDate === selectedDateWithoutTime;
      }
    })
    .filter((event) => {
      // Filtrar eventos iguales o superiores a la fecha actual
      const currentDate = date;
      const eventDate = new Date(event.Date).toISOString().slice(0, 10);
      // Si se marca el checkbox de mostrar eventos pasados, muestra todos los eventos
      if (showPastEvents) {
        return eventDate <= currentDate;
      }
      return eventDate > currentDate;
    })
    .sort((eventA, eventB): eventDataMongoDb | any => {
      // Lógica de ordenamiento existente para eventos con fecha
      if (showPastEvents) {
        if (selectedDateOrder === "recientes") {
          return (
            new Date(eventA.Date).getTime() - new Date(eventB.Date).getTime()
          );
        } else {
          return (
            new Date(eventB.Date).getTime() - new Date(eventA.Date).getTime()
          );
        }
      }
      if (selectedDateOrder === "recientes") {
        return (
          new Date(eventA.Date).getTime() - new Date(eventB.Date).getTime()
        );
      } else {
        return (
          new Date(eventB.Date).getTime() - new Date(eventA.Date).getTime()
        );
      }
    });
    

  const title = {
    event: "Eventos",
    task: "Tareas",
    note: "Notas",
  };

  const renderTitle = () => {
    switch (string) {
      case "events":
        return title.event;
      case "tasks":
        return title.task;

      default:
        break;
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 shadow-2xl">
      <h1 className="text-2xl font-bold text-white mb-4">{renderTitle()}</h1>
      <div className="w-full  rounded shadow-2xl p-4 mb-4">
        <div className="flex justify-center items-start space-x-4 bg-gradient-to-br from-purple-600 to-pink-600 p-4 shadow-2xl">
          <div className="w-1/4 p-2">
            <label htmlFor="category" className="block text-white mb-2">
              Categoría:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-8 bg-purple-400 hover:bg-purple-500 text-white px-2 py-1 rounded shadow-2xl"
            >
              <option value="todas">Todas</option>
              <option value="trabajo">Trabajo</option>
              <option value="personal">Personal</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div className="w-1/4 p-2">
            <label htmlFor="dateOrder" className="block text-white mb-2">
              Orden:
            </label>
            <select
              id="dateOrder"
              value={selectedDateOrder}
              onChange={(e) => setSelectedDateOrder(e.target.value)}
              className="w-full h-8 bg-purple-400 hover:bg-purple-500 text-white px-2 py-1 rounded shadow-2xl"
            >
              <option value="recientes">Más Recientes</option>
              <option value="antiguos">Más Antiguos</option>
            </select>
          </div>
          <div className="w-1/4 p-2">
            <label htmlFor="eventDate" className="block text-white mb-2">
              Fecha
            </label>
            <DatePicker
              id="eventDate"
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Selecciona fecha"
              customInput={
                <input
                  className="w-full h-8 bg-purple-400 hover:bg-purple-500 text-white px-2 py-1 rounded shadow-2xl"
                  style={{
                    background: "rgba(192, 132, 252, 1)",
                    color: "white",
                  }}
                />
              }
            />
          </div>
          <div className="w-1/4 p-2 flex flex-col items-center space-x-2">
            <label htmlFor="showPastEvents" className="block text-white mb-2">
              {renderTitle()} pendientes
            </label>
            <div className="relative flex  items-center">
              <div
                className="w-10 h-6 bg-pink-400 rounded-full p-1 transition duration-300 ease-in-out cursor-pointer"
                onClick={() => setShowPastEvents(!showPastEvents)}
              >
                <div
                  className={`bg-gray-600 w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out ${
                    showPastEvents ? "" : "translate-x-4 bg-purple-600"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterEvents ? (
              filterEvents.map((event: eventDataMongoDb, index: number) => (
                <div
                  key={index}
                  className="w-full flex flex-col justify-between bg-gradient-to-br from-purple-600 to-pink-600 hover:bg-pink-500 text-white p-4 rounded shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => {
                    openLightbox(event);
                  }}
                >
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">
                      {event.title}
                    </h2>
                    <p className="text-sm text-purple-100 line-clamp-4">
                      {event.description}
                    </p>
                    <p className="text-sm">{event.category}</p>
                  </div>
                  {event.Date ? (
                    <div className="mb-2">
                      <p className="text-sm">{event.Date}</p>
                    </div>
                  ) : null}
                  {event.required && event.Time ? (
                    <div className="mb-2">
                      <p className="text-sm">{event.Time}</p>
                    </div>
                  ) : null}
                  <div className="flex space-x-2">
                    {new Date(event.Date).toISOString().slice(0, 10) >= date ? (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            eventEdit(event);
                          }}
                          className="bg-white text-purple-400 px-4 py-2 rounded shadow-2xl hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
                        >
                          Editar
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(event);
                          }}
                          className="bg-white text-purple-400 px-4 py-2 rounded shadow-2xl hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
                        >
                          Borrar
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(event);
                        }}
                        className="bg-white text-purple-400 px-4 py-2 rounded shadow-2xl hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
                      >
                        Borrar
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="loading-container-login">
                <div className="loading-spinner-login"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={lightboxIsOpen}
        onRequestClose={closeLightbox}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedEvent && (
          <div className="w-96 mx-auto p-4 bg-white rounded shadow-2xl">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">{selectedEvent.title}</h2>
              <h2 className="text-xl font-bold mb-4">
                <strong>{selectedEvent.Date}</strong>
              </h2>
            </div>
            <p className="text-sm mb-4">
              <strong>Descripcion</strong> {selectedEvent.description}
            </p>
            {selectedEvent.Time && (
              <p className="text-sm mb-4">
                <strong>Hora:</strong> {selectedEvent.Time}
              </p>
            )}
            <p className="text-sm mb-4"> {selectedEvent.description}</p>

            <button
              onClick={closeLightbox}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300 ease-in-out"
            >
              Cerrar
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
