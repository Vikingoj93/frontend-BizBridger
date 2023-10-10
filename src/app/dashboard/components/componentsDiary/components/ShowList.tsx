import { URL_SERVER } from "@/libs/config";
import { eventDataMongoDb } from "@/types/interfaces";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ShowList({
  loadList,
  eventData,
}: {
  loadList: any;
  eventData: eventDataMongoDb[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [selectedDateOrder, setSelectedDateOrder] = useState("recientes");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showPastEvents, setShowPastEvents] = useState(false); // Nuevo estado para mostrar eventos pasados

  useEffect(() => {
    loadList();
  }, []);

  return (
    <section>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="trabajo">Trabajo</option>
          <option value="personal">Personal</option>
          <option value="otros">Otros</option>
        </select>

        <label htmlFor="dateOrder">Orden:</label>
        <select
          id="dateOrder"
          value={selectedDateOrder}
          onChange={(e) => setSelectedDateOrder(e.target.value)}
        >
          <option value="recientes">Más Recientes</option>
          <option value="antiguos">Más Antiguos</option>
        </select>

        <div>
          <label htmlFor="eventDate">Seleccionar Fecha:</label>
          <DatePicker
            id="eventDate"
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
          />
          <button onClick={() => setSelectedDate(null)}>Reset</button>
        </div>

        <label htmlFor="showPastEvents">Mostrar eventos pasados:</label>
        <input
          type="checkbox"
          id="showPastEvents"
          checked={showPastEvents}
          onChange={() => setShowPastEvents(!showPastEvents)}
        />

        {eventData ? (
          eventData
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
                const selectedDateWithoutTime = new Date(
                  selectedDate
                ).toISOString().slice(0, 10);

                // Compara si la fecha del evento es igual o posterior a la fecha seleccionada
                return eventDate === selectedDateWithoutTime;
              }
            })
            .filter((event) => {
              // Filtrar eventos iguales o superiores a la fecha actual
              const currentDate = new Date();
              currentDate.setHours(0, 0, 0, 0);
              const eventDate = new Date(event.Date).toISOString().slice(0, 10);

              // Si se marca el checkbox de mostrar eventos pasados, muestra todos los eventos
              if (showPastEvents) {
                return eventDate < currentDate.toISOString().slice(0, 10);
              }

              return eventDate >= currentDate.toISOString().slice(0, 10);
            })
            .sort((eventA, eventB) => {
              if (showPastEvents) {
                if (selectedDateOrder === "recientes") {
                  return (
                    new Date(eventB.Date).getTime() - new Date(eventA.Date).getTime()
                  );
                } else {
                  return (
                    new Date(eventA.Date).getTime() - new Date(eventB.Date).getTime()
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
            })
            .map((event: eventDataMongoDb, index: number) => (
              <div key={index} className="border border-white hover:scale-105">
                <div>
                  <h2>{event.title}</h2>
                  <p>{event.category}</p>
                </div>
                <p> {event.description} </p>
                <p> {event.Date} </p>
                {event.required && (
                  <div>
                    <p>{event.Time}</p>
                  </div>
                )}
              </div>
            ))
        ) : (
          <div className="loading-container-login">
            <div className="loading-spinner-login"></div>
          </div>
        )}
      </div>
    </section>
  );
}
