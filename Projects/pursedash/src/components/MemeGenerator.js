// src/components/MemeGenerator.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function MemeGenerator() {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    // Fetch a random meme from Meme API
    axios
      .get("https://meme-api.com/gimme")
      .then((response) => {
        setMeme(response.data.url); // Accessing the meme image URL
      })
      .catch((error) => console.error("Error fetching meme:", error));
  }, []);

  return (
    <div>
      <h2>Random Meme</h2>
      {meme ? (
        <img src={meme} alt="Random Meme" style={{ width: "300px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MemeGenerator;
