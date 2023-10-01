'use client'
import React, { useContext } from "react";
import Panel from "./panel";
import Main from "./Main";
import TaskComponent from "./components/tasks/TaskComponent";

export default function DashboardPage() {

  return (
    <div className="flex flex-col sm:flex-row">
        <Panel />
        <Main>
          <TaskComponent></TaskComponent>
        </Main>
    </div>
  );
}
