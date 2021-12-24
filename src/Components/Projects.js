import React from "react";
import Calculatorapp from "./Calculator2/Calculator JS" 
import Todolistapp from "./Todolist/ToDoApp JS";

function Projects(){
    return (
        <div>
            <h2>Projects</h2>
            <h3>Calculator</h3>
            <div className="Calapp">
                <Calculatorapp />
                <div className="Caldesc">
                    This is a simple calculator app rendered using ReactJs.It performs basic arithmetic operations. 
                </div>
                
            </div>
            <h3>To-Do List</h3>
            <div  className="todoapp">
                <Todolistapp />
                <div className="tododesc">This is a To-Do list app made using ReactJs. The items in the list are rendered using state changes in React components.
                    Each item can be editted and deleted individually  using the edit and delete button provided on it. 
                </div>
            </div>
        </div>
    )
}
export default Projects;