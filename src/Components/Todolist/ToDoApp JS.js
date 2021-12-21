import React from "react";
import './ToDoApp CSS.css';
import Taskcard from './Components/Task_card';
import {useState} from "react";


 

function Todolistapp() {
  const [entry,setEntry] = useState("");
  const [editingEntry, setEditingEntry] = useState(-1);
  const [task,setTask] = useState([]);


  const handlechange =function Handlechange(change){
    setEntry(change.target.value);
  };

  const handlesubmit = (submit)=>{
    submit.preventDefault();
   let newTask = [...task];
    newTask.push({
      id: newTask.length,
      taskname: entry,
    });
    setTask(newTask);
    setEntry("");
    
  }

  function Deltask(id){
    setTask(task.filter((e)=> id !== e.id ))
    }
  
  function Edittask(index){
    setEditingEntry(index);
    setEntry(task[index].taskname);
   
  }

  function updateTask(){
    let newTask = [...task];
    newTask[editingEntry]['taskname'] = entry;
    setTask(newTask);
    setEditingEntry(-1);
    setEntry("");
  }

  return (
    <div className="Outer-container">
   <div className="containertodo">
    <h1 className= "headingtodo">
      TO-DO List
    </h1>
    <p styles={{color:"white"}}>{editingEntry === -1 ? "" : `EDITING TASK ${editingEntry+1}`}</p>
    <input className="textinput" onChange={handlechange} type="text" value={entry} placeholder="Add to list.." >
    
    </input>
    <button onClick={editingEntry === -1 ? handlesubmit : updateTask} className="submitbtn" type="submit" name="Add_task">
      {editingEntry === -1 ?"ADD TASK": "SAVE EDIT"}
    </button>
    <div>
     {task.map((tasks, index)=> (tasks.taskname?(<Taskcard key={tasks.id} index={index} id={tasks.id} edit={Edittask} oncheck={Deltask} task={tasks.taskname} />): null))};
    </div>
    
   </div>
   </div>
  );
}

export default Todolistapp;

