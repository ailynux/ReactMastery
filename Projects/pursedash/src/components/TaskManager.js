// src/components/TaskManager.js
import React, { useState, useRef } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();
  const priorityRef = useRef();
  const dueDateRef = useRef();

  const addTask = () => {
    const taskText = taskInputRef.current.value;
    const priority = priorityRef.current.value;
    const dueDate = dueDateRef.current.value;
    if (taskText) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: taskText,
          completed: false,
          isEditing: false,
          priority,
          dueDate,
        },
      ]);
      taskInputRef.current.value = "";
      dueDateRef.current.value = "";
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const enableEditing = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };

  const saveEdit = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  return (
    <div className="task-manager-container">
      <h2>Enhanced Task Manager</h2>
      <div className="task-input-section">
        <input ref={taskInputRef} type="text" placeholder="Add a new task" />
        <select ref={priorityRef} defaultValue="Medium">
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <input ref={dueDateRef} type="date" placeholder="Due Date" />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "task-completed" : ""}`}
            data-priority={task.priority}
          >
            {task.isEditing ? (
              <input
                type="text"
                defaultValue={task.text}
                onBlur={(e) => saveEdit(task.id, e.target.value)}
              />
            ) : (
              <div className="task-details">
                <span>{task.text}</span>
                <small>Priority: {task.priority}</small>
                {task.dueDate && <small>Due Date: {task.dueDate}</small>}
              </div>
            )}
            <div className="task-actions">
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              {!task.isEditing && (
                <button onClick={() => enableEditing(task.id)}>Edit</button>
              )}
              <button className="delete" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
