import React from "react";
import Calculatorapp from "./Calculator2/Calculator JS" 
import Todolistapp from "./Todolist/ToDoApp JS";

function Projects(){
    return (
        <div>
            <h2>Projects</h2>
            <h3>Calculator</h3>
            <div>
                <Calculatorapp />
            </div>
            <h3>To-Do List</h3>
            <div>
                <Todolistapp />
            </div>
        </div>
    )
}
export default Projects;