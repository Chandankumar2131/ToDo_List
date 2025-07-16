import React from "react";
import { MdDeleteForever, MdCheck } from "react-icons/md";

const TaskItem = ({ task, onDelete }) => {
  return (
    <li className="todoLi">
      <span>{task}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onDelete(task)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TaskItem;