import React from "react";

export function Button({ text, type, click }) {
  return (
    <button onClick={click} className={`Button__type ${type}`}>
      {text}
    </button>
  );
}
