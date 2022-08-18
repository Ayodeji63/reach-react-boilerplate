import React from "react";
import { Button } from "../Components";
import { Board } from "../Components/Board";

export function AttacherView({ blackJackGame, attacherCard, deployHit, drop }) {
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
      <div className="Attacher__btn">
      <Button text="Hit" type="Button__hit" click={deployHit} />
      <Button text="Stand" type="Button__stand" click={drop} />
      </div>
    </div>
  );
}
