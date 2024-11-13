// src/components/Summary.js
import React, { useMemo } from "react";

function Summary({ tasks }) {
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  return (
    <div>
      <h2>Productivity Summary</h2>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default Summary;
