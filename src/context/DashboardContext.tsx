"use client";
import { URL_SERVER } from "@/libs/config";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const contextD = createContext<any>(undefined);

export default function DashboardContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    image: string;
  }>();
  useEffect(() => {
    axios
      .get(`${URL_SERVER}/api/dashboard/profile`, { withCredentials: true })
      .then((res) => {
        if (res.data === false) {
          window.location.href = "/";
          return;
        }

        setUserData({
          name: res.data.name,
          email: res.data.email,
          image: res.data.image,
        });
      });
  }, []);

  return <contextD.Provider value={{ userData }}>{children}</contextD.Provider>;
}
