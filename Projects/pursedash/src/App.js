// src/App.js
import React, { useState, useEffect, useRef } from "react";
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

  // Refs for each card to observe their visibility
  const cardRefs = useRef(new Array(6).fill(null));

  useEffect(() => {
    // Intersection Observer callback
    const revealCards = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    };

    // Initialize the observer
    const observer = new IntersectionObserver(revealCards, {
      threshold: 0.1, // Trigger when 10% of card is visible
    });

    // Observe each card if the reference is not null
    cardRefs.current.filter(Boolean).forEach((ref) => {
      if (ref instanceof Element) {
        observer.observe(ref);
      }
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">PurseDash</h1>
      <h2 className="dashboard-subtitle">Personal Productivity Dashboard</h2>

      <div className="card" ref={(el) => (cardRefs.current[0] = el)}>
        <QuoteDisplay />
      </div>

      <div className="card" ref={(el) => (cardRefs.current[1] = el)}>
        <PomodoroTimer />
      </div>

      <div className="card" ref={(el) => (cardRefs.current[2] = el)}>
        <TaskManager onTasksChange={handleTaskUpdate} />
      </div>

      <div className="card" ref={(el) => (cardRefs.current[4] = el)}>
        <MemeGenerator />
      </div>

      <div className="fact-card" ref={(el) => (cardRefs.current[5] = el)}>
        <UselessFactDisplay />
      </div>
    </div>
  );
}

export default App;
