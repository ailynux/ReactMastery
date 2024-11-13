// src/components/UselessFactDisplay.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UselessFactDisplay.css"; // Import the CSS file

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
    <div className="fact-card">
      <h2 className="fact-title">Random Useless Fact</h2>
      <p className="fact-text">{fact}</p>
      <button className="fact-button" onClick={fetchFact}>
        Get Another Fact
      </button>
    </div>
  );
}

export default UselessFactDisplay;
