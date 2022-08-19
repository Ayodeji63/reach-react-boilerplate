import React from "react";

export function Button({ text, type, click, disabled }) {
  return (
    <button onClick={click} className={`Button__type ${type}`}>
      {text}
    </button>
  );
}
