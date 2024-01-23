import React from "react";
import "./styles.css";
export const Quote = ({ quote, quoteAutor }) => {
  return (
    <div className="quote-container-principal">
      <div className="quote-container">
        <p className="text-quote">{quote}</p>
        <p className="text-quoteAutor">{quoteAutor}</p>
      </div>
    </div>
  );
};
