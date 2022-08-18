import React from "react";

export function Card({ card }) {
  return (
    <div className="Card">
      <img src={`images/${card}.png`} />
    </div>
  );
}
