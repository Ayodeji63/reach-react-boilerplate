import React, { useEffect, useState } from "react";
import { Board, Button, Card, State } from "../Components";

export function AttacherView({ blackJackGame, randomCards, submitCards, attacherCard, setAttacherCard, attacherScore, setAttacherScore, opponentCard, text, setText, deploy, opponentScore}) {
  
  const [card, setCard] = useState([]);
  const [isHit, setIsHit] = useState(false)
  const [isStand, setIsStand] = useState(false)

  const [deployerCard, setDeployerCard] = useState([])

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
        setAttacherCard(prevCards => [...prevCards, <Card card={card}/>]) 
        setCard(prevCards => [...prevCards, card])
        updateScore(card, attacherScore, setAttacherScore)
      } 
      if (i == 2) {
        let card = randomCards();
        setAttacherCard(prevCards => [...prevCards, <Card card={card}/>]) 
        setCard(prevCards => [...prevCards, card])
        updateScore(card, attacherScore, setAttacherScore)
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
      if (attacherScore < 21 && isHit == true) {
        let card = randomCards();
        setAttacherCard(prevCards => [...prevCards, <Card card={card}/>])
        updateScore(card, attacherScore, setAttacherScore)
        setIsStand(true)
        setCard(prevCards => [...prevCards, card])
        console.log(card);
      }
    }

    const stand = () => {
        setText('Waiting for opponent...')
        setIsHit(false)
        if (deploy) {
          setText('Collecting Deployer Info...')
        setIsHit(false)
        let cardString = card.map((index) => index).join('');
        submitCards([attacherScore, cardString]) 
        }
         
    }


  return (
    <div className="Attacher">
       <State 
         text= {text}
         />
      <div className="Attacher__board">
        
        <Board
          player="You"
          class="Attacher__class"
          card={attacherCard}
          score={attacherScore}
        />
        <Board
          player="Deployer"
          class="Dealer__Class"
          card={opponentCard}
          score = {opponentScore}
        />
      </div>
      <div className="Attacher__btn">
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
