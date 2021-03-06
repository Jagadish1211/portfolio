import React from "react";
import Calculatorapp from "./Calculator2/Calculator JS";
import Todolistapp from "./Todolist/ToDoApp JS";
import { useGlobal } from "../context/global";

function Projects() {
  const { globalState } = useGlobal();
  return (
    <div>
      <h2>Projects</h2>
      <h3>Calculator</h3>
      <div className="Calapp">
        <Calculatorapp />
        <div className="Caldesc">
          <p>
            Global Interactions:{" "}
            {globalState?.globalInteractions?.calculator || 0}
          </p>
          <p>Session Interactions: {globalState.calculatorInteractions}</p>
          <br />
          This is a simple calculator app rendered using ReactJs.It performs
          basic arithmetic operations.
        </div>
      </div>
      <h3>To-Do List</h3>
      <div className="todoapp">
        <div className="tododesc">
          <p>
            Global Interactions:{" "}
            {globalState?.globalInteractions['to-do'] || 0}
          </p>
          <p>Session Interactions: {globalState.todoInteractions}</p>
          <br />
          This is a To-Do list app made using ReactJs. The items in the list are
          rendered using state changes in React components. Each item can be
          editted and deleted individually using the edit and delete button
          provided on it.
        </div>
        <Todolistapp />
      </div>
    </div>
  );
}
export default Projects;
