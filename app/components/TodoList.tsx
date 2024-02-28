"use client";
import React from "react";
import Task from "./Task";
import { ITask } from "@/types/task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr className="bg-[#94d1c8] text-neutral-800">
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
