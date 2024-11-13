// src/components/PomodoroTimer.js
import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css"; // Import styles

function PomodoroTimer() {
  const [time, setTime] = useState(1500); // Default 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(1500); // 25 min
  const [breakDuration, setBreakDuration] = useState(300); // 5 min

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time > 0) return time - 1;
          if (time === 0) {
            playAlarm();
            toggleCycle();
            return isBreak ? workDuration : breakDuration;
          }
          return time;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak, workDuration, breakDuration]);

  const playAlarm = () => {
    const audio = new Audio("/alarm.mp3"); // Include an alarm sound file in your public folder
    audio.play();
  };

  const toggleCycle = () => {
    setIsBreak((prev) => !prev);
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(workDuration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleWorkDurationChange = (e) => {
    const newWorkDuration = e.target.value * 60;
    setWorkDuration(newWorkDuration);
    if (!isActive && !isBreak) setTime(newWorkDuration);
  };

  const handleBreakDurationChange = (e) => {
    const newBreakDuration = e.target.value * 60;
    setBreakDuration(newBreakDuration);
    if (!isActive && isBreak) setTime(newBreakDuration);
  };

  return (
    <div className="pomodoro-container">
      <h2>Pomodoro Timer</h2>
      <p>{isBreak ? "Break Time" : "Work Time"}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              (time / (isBreak ? breakDuration : workDuration)) * 100
            }%`,
          }}
        ></div>
      </div>
      <p className="timer-display">{formatTime(time)}</p>
      <div className="controls">
        <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="settings">
        <label>
          Work Duration (minutes):
          <input
            type="number"
            min="1"
            value={workDuration / 60}
            onChange={handleWorkDurationChange}
          />
        </label>
        <label>
          Break Duration (minutes):
          <input
            type="number"
            min="1"
            value={breakDuration / 60}
            onChange={handleBreakDurationChange}
          />
        </label>
      </div>
    </div>
  );
}

export default PomodoroTimer;
