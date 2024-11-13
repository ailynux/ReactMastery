// src/components/MemeGenerator.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MemeGenerator.css";

function MemeGenerator() {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    // Fetch a random meme from the Meme API
    axios
      .get("https://meme-api.com/gimme")
      .then((response) => {
        setMeme(response.data.url); // Accessing the meme image URL
      })
      .catch((error) => console.error("Error fetching meme:", error));
  }, []);

  return (
    <div className="meme-card">
      <h2 className="meme-title">Random Meme</h2>
      {meme ? (
        <img className="meme-image" src={meme} alt="Random Meme" />
      ) : (
        <p className="loading-text">Loading...</p>
      )}
      <button
        className="new-meme-button"
        onClick={() => window.location.reload()}
      >
        Get Another Meme
      </button>
    </div>
  );
}

export default MemeGenerator;
