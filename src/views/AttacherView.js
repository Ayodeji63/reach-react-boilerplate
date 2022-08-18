import React from "react";
import { Board } from "../Components/Board";

export function AttacherView({ blackJackGame, attacherCard }) {
  return (
    <div className="Attacher">
      <div className="Attacher__board">
        <Board
          player="Attacher"
          class="Attacher__class"
          // card={attacherCard}
          // score={blackJackGame["attacher"]["scorespan"]}
        />
        <Board
          player="Deployer"
          class="Dealer__Class"
          // card={deployerCard}
          // score = {blackJackGame['deployer']['scorespan']}
        />
      </div>
    </div>
  );
}
