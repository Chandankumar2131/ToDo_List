import React, { useState } from "react";
import "./ToDo.css";

export default function Todo2() {
  const [inputValue, SetInputValue] = useState("");
  const [value, setValue] = useState([]);

  const handleInputValue = (value) => {
    SetInputValue(value);
  };
  const handlePrevent = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (value.includes(inputValue)) {
      SetInputValue("");
      return;
    }

    setValue((prev) => [...prev, inputValue]);
    SetInputValue("");
  };

  return (
    <>
      <section className="content box">
        <h1>ToDo List</h1>
        <section className="form">
          <form onSubmit={handlePrevent}>
            <input
              type="text"
              className="inp"
               autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputValue(event.target.value)}
            />
             <button type="submit">Add Task</button>
          </form>
        </section>
        <section className="myUnOrderdLi">
            <ul>
{
    value.map((curValue,index)=>{
        return <li key={index}>
            <span>{curValue}</span>
        </li>
    })
}

            </ul>
        </section>
      </section>
    </>
  );
}
