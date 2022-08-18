import React from "react";

export function State({ text, type }) {
  return (
    <div className="State">
      <h2 className={`State__text ${type}`}>{text}</h2>
    </div>
  );
}
