import React from "react";

export function Header({ text1, text2, class2, span, spanClass }) {
  return (
    <div>
      <h1>{text1}</h1>
      <h1 className={class2}>
        {text2} <span className={spanClass}>{span}</span>
      </h1>
    </div>
  );
}
