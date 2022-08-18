import React from "react";
import { memo } from "react";
import { Board, Button, State } from "../Components/";

export function DeployerView({ blackJackGame, deployerCard, deployHit, drop, score }) {
  return (
    <div className="Deployer">
     <State 
         text= {score == 0 ? "You will be given two cards" : "Do you want to hit or stand"}
         />
      <div className="Depolyer__Board">
        <Board
          player="Deployer"
          class="Dealer__Class"
          // card={deployerCard}
          // score={blackJackGame["deployer"]["scorespan"]}
        />
        <Board
          player="Attacher"
          class="Attacher__class"
          // card = {attacherCard}
          // score = {blackJackGame['attacher']['scorespan']}
        />
      </div>
      <div className="Deployer__btn">
      <Button text="Hit" type="Button__hit" click={deployHit} />
      <Button text="Stand" type="Button__stand" click={drop} />
      </div>
    </div>
  );
}
