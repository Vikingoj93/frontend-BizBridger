'use client'
import { mycontext } from "@/components/context";
import { useContext, useEffect } from "react";
import { Context } from "@/components/context";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {

    useContext(mycontext)
  return (
    <>
      <Context>{children}</Context>
    </>
  );
}
