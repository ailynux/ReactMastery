// src/App.js
import React, { useState } from "react";
import "./App.css";
import QuoteDisplay from "./components/QuoteDisplay";
import PomodoroTimer from "./components/PomodoroTimer";
import TaskManager from "./components/TaskManager";
import Summary from "./components/Summary";
import MemeGenerator from "./components/MemeGenerator";
import UselessFactDisplay from "./components/UselessFactDisplay";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskUpdate = (newTasks) => {
    setTasks(newTasks);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">PurseDash</h1>
      <h2 className="dashboard-subtitle">Personal Productivity Dashboard</h2>

      <div className="card">
        <QuoteDisplay />
      </div>

      <div className="card">
        <PomodoroTimer />
      </div>

      <div className="card">
        <TaskManager onTasksChange={handleTaskUpdate} />
      </div>

      <div className="card">
        <Summary tasks={tasks} />
      </div>

      <div className="card">
        <MemeGenerator />
      </div>

      <div className="fact-card">
        <UselessFactDisplay />
      </div>
    </div>
  );
}

export default App;
