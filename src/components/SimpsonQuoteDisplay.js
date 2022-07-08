import React from "react";

const SimpsonQuoteDisplay = ({ quote }) => {
  return (
    quote && (
      <div className="SimpsonQuoteDisplay">
        <img src={quote.image} alt={quote.character} />
        <h2>{quote.quote}</h2>
        <p>{quote.character}</p>
      </div>
    )
  );
}

export default SimpsonQuoteDisplay;
