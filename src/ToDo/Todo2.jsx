import React, { useEffect, useState } from "react";
import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever,MdCheck } from "react-icons/md";

import "./ToDo.css";

export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const[datTime,setDateTime]= useState("")

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };


  useEffect(()=>{
    const interval = setInterval(()=>{
      const now = new Date();
      const formattedDate= now.toLocaleDateString();
    const formattedTime= now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`)
    },1000)
    return ()=> clearInterval(interval);

  },[])
  
 const handleDelete=(value)=>{
console.log(task);
console.log(value);
const updatedTask = task.filter((curTask)=> curTask !== value)
setTask(updatedTask) 


 }

 const clearAllArr =()=>{
  setTask([])
 }



  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h3 className="time-date">{datTime}</h3>
        </header>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todoLi">
                <span>{curTask}</span>
                {/* <button className="check-btn"><MdCheck /></button> */}
                
                <button className="delete-btn" onClick={()=>handleDelete(curTask)}> <MdDeleteForever /></button>
                
              </li>
              
              
            );
          })}
          
        </ul>
      </section>
      <section>
        <button className="deleteAll" onClick={clearAllArr}>Clear All</button>
      </section>
      <div className="chandan">
      <h2>Developed by Chandan Yadav</h2>
      </div>
      
    </>
  );
}