"use client";
import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { URL_SERVER } from "@/libs/config";

export const mycontext = createContext({});

export function Context({ children }: { children: React.ReactNode }) {
  const [userObjet, setUserObjet] = useState({});

  useEffect(() => {
    axios
      .get(`${URL_SERVER}getuser`, { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObjet(res.data);
        } else {
          console.log("no data");
        }
      });
  }, []); // Deja el arreglo de dependencias vacío para que se ejecute solo una vez
  
  useEffect(() => {
    if (userObjet) {
      console.log(userObjet); // Imprime el valor de userObjet cuando se actualice
    }
  }, [userObjet]); // Agrega userObjet como dependencia de este efecto
  

  return <mycontext.Provider value={userObjet}>{children}</mycontext.Provider>;
}
