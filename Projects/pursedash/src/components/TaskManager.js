// src/components/TaskManager.js
import React, { useState, useRef } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef();

  const addTask = () => {
    const task = taskInputRef.current.value;
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      taskInputRef.current.value = "";
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input ref={taskInputRef} type="text" placeholder="Add a new task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
