import React, { useEffect, useState } from "react";
import { MdDeleteForever, MdCheck } from "react-icons/md";
import "./ToDo.css";

export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // LocalStorage Load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("todo-tasks"));
    if (storedTasks) setTask(storedTasks);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(task));
  }, [task]);

  // Time Updater
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (task.find((t) => t.text === inputValue)) {
      setInputValue("");
      return;
    }

    const newTask = { text: inputValue, completed: false };
    setTask((prev) => [...prev, newTask]);
    setInputValue("");
  };

  const handleDelete = (value) => {
    const updatedTasks = task.filter((t) => t.text !== value);
    setTask(updatedTasks);
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTask(updatedTasks);
  };

  const clearAllArr = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>📝 Todo List</h1>
          <h3 className="time-date">{dateTime}</h3>
          <p>Total Tasks: <strong>{task.length}</strong></p>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="todo-input"
              placeholder="Enter your task..."
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </form>
        </section>
      </section>

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => (
            <li
              key={index}
              className={`todoLi ${curTask.completed ? "completed" : ""}`}
            >
              <span>{curTask.text}</span>
              <button
                className="check-btn"
                title="Mark as done"
                onClick={() => toggleCompleted(index)}
              >
                <MdCheck />
              </button>

              <button
                className="delete-btn"
                title="Delete task"
                onClick={() => handleDelete(curTask.text)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {task.length > 0 && (
        <section>
          <button className="deleteAll" onClick={clearAllArr}>
            Clear All
          </button>
        </section>
      )}

      <footer className="chandan">
        <h2>Developed by Chandan Yadav</h2>
        <p className="quote">“Stay focused. Keep shipping. Every task matters.”</p>
      </footer>
    </>
  );
}