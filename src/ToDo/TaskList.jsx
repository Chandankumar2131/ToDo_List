import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <section className="myUnOrdList">
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;