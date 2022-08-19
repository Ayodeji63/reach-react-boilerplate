import React from "react";

export function Board({ player, card, score }) {
  return (
    <div className="Board">
      <h1 className="Board__player">
        <span className="player">{player}: </span>
        <span className={score > 21 ? "span__red" : "span__yellow"}>
          {score}
        </span>
      </h1>
      <div className="Board__card">{card}</div>
    </div>
  );
}
