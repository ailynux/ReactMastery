// src/components/QuoteDisplay.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuoteDisplay.css"; // Import the CSS file

function QuoteDisplay() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("https://api.kanye.rest")
      .then((response) => {
        setQuote(response.data.quote); // Access the quote from the response data
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

  return (
    <div className="quote-container">
      <h2 className="quote-title">Kanye Quote of the Day</h2>
      <p className="quote-text">"{quote}"</p>
    </div>
  );
}

export default QuoteDisplay;
