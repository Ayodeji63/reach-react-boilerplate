import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Board, Button, Card, State } from "../Components";
import { GameOutcomeView } from "./GameOutcome";


export function DeployerView({blackJackGame,  randomCards, submitCards, updateScore, deployerScore, setDeployerScore, deployerCard, setDeployerCard, opponentCard, text, setText, opponentScore}) {

  const [card, setCard] = useState([]);
  const [isHit, setIsHit] = useState(false)
  const [isStand, setIsStand] = useState(false)
  
  const [attacherCard, setAttacherCard] = useState([])
 
  function updateScore(card, initialScore, activeScore) {
    if (card === "A") {
      if (initialScore + blackJackGame["cardsMap"][card][1] > 21) {
        activeScore(
          (prevScore) => prevScore + blackJackGame["cardsMap"][card][0]
        );
      } else if (initialScore + blackJackGame["cardsMap"][card][1] <= 21) {
        activeScore(
          (prevScore) => prevScore + blackJackGame["cardsMap"][card][1]
        );
      }
    } else {
      activeScore((prevScore) => prevScore + blackJackGame["cardsMap"][card]);
    }
  }
  const staterCards = () => {
  for (let i = 0; i < 2; i++) {
    if (i == 1) {
      let card = randomCards();
      setDeployerCard(prevCards => [...prevCards, <Card card={card}/>]) 
      setCard(prevCards => [...prevCards, card])
      updateScore(card, deployerScore, setDeployerScore)
    } 
    if (i == 2) {
      let card = randomCards();
      setDeployerCard(prevCards => [...prevCards, <Card card={card}/>]) 
      setCard(prevCards => [...prevCards, card])
      updateScore(card, deployerScore, setDeployerScore)
    }
    
  }
    
    }
  

    useEffect(() => {
      setTimeout(() => {
        staterCards();
        setIsHit(true)
        setText('Hit or Stand')
      }, 5000)
    }, [])

  const Hit = () => {
    if (deployerScore < 21 && isHit == true) {
      let card = randomCards();
      setDeployerCard(prevCards => [...prevCards, <Card card={card}/>])
      updateScore(card, deployerScore, setDeployerScore)
      setCard(prevCards => [...prevCards, card])
    }
  }

  const stand = () => {
      setText('Waiting for opponent...')
      setIsHit(false)
      let cardString = card.map((index) => index).join('');
      console.log(cardString);
      submitCards([deployerScore, cardString])
  }



  return (
    <div className="Deployer">
     <State 
         text= {text}
         />
      <div className="Depolyer__Board">
        <Board
          player="You"
          class="Dealer__Class"
          card={deployerCard}
          score={deployerScore}
        />
        <Board
          player="Attacher"
          class="Attacher__class"
          card = {opponentCard}
          score = {opponentScore}
        />
      </div>
      <div className="Deployer__btn">
      <Button text="Hit" 
      type="Button__hit" 
      click={Hit} 
      />

      <Button text="Stand" 
      type="Button__stand" 
      click={stand}
       />
      </div>
    </div>
  );
}
