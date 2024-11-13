import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UselessFactDisplay.css";

function UselessFactDisplay() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => {
        setFact(response.data.text); // Access the fact text from the response
      })
      .catch((error) => console.error("Error fetching fact:", error));
  };

  return (
    <div className="UselessFactDisplay">
      <h2>Random Useless Fact</h2>
      <p>{fact}</p>
      <button onClick={fetchFact}>Get Another Fact</button>
    </div>
  );
}

export default UselessFactDisplay;
