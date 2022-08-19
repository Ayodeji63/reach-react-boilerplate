import { useEffect, useState } from 'react';
import { symbols } from '../cardComponents/data';
import CardHolder from "../cardComponents/CardHolder"
import { blackJackGame } from '../utils/constants';
import "./styles.css";

export function GamePlayView ({ onCardsChange, opponentCards, isAlice, canViewAllOpponentCards, submitCards }) {
    const [totalCardValue, setTotalCardValue] = useState(0);
    const [opponentCardValue, setOpponentCardValue] = useState(0);
    const [cards, setCards] = useState([]);
    const [opponentCardSymbols, setOpponentCardSymbols] = useState([]);
    const [waiting, setWaiting] = useState(false);

    function pickRandomCard() {
        const randomCard = blackJackGame["cards"][Math.floor(Math.random() * 11) + 1];
        const cardValue = blackJackGame.cardsMap[randomCard];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];

        return {
            card: randomCard,
            cardValue,
            symbol,
        }
    }

    function pickFirstTwoCards() {
        const firstCard = pickRandomCard();
        const secondCard = pickRandomCard();

        setTotalCardValue(firstCard.cardValue + secondCard.cardValue);

        onCardsChange([firstCard.card, secondCard.card].join(''));

        setCards([
            {
                card: firstCard.card,
                symbol: firstCard.symbol
            },
            {
                card: secondCard.card,
                symbol: secondCard.symbol
            }
        ])
    }

    function pickExtraCard() {
        const card = pickRandomCard();

        setTotalCardValue((value) => value + card.cardValue);

        const cardStrings = [...cards, { card: card.card, symbol: card.symbol }].map((value) => value.card).join('');

        onCardsChange(cardStrings);

        setCards([...cards, { card: card.card, symbol: card.symbol }]);

    }

    function parseOpponentCards() {
        let newSymbols = [];

        const parsedCards = opponentCards.map((value, index) => {
            if (opponentCardSymbols[canViewAllOpponentCards || isAlice? index : index + 1]) {
        
                return {
                    card: value,
                    symbol: opponentCardSymbols[canViewAllOpponentCards || isAlice? index : index + 1]
                }
            }
            else {
                const newSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                newSymbols.push(newSymbol);

                return {
                    card: value,
                    symbol: newSymbol,
                }
            }
        })

        if (newSymbols.length > 0) {
            setOpponentCardSymbols([ ...opponentCardSymbols, ...newSymbols ])
        }

        return parsedCards.length > 0?
            canViewAllOpponentCards || isAlice? parsedCards : [{ card: '0', symbol: opponentCardSymbols[0] }, ...parsedCards]
            :
            []
    }

    const dealCards = () => {
        let cardString = cards.map((value) => value.card).join('');

        setWaiting(true);

        if (isAlice) cardString = cardString.slice(1);

        submitCards([totalCardValue, cardString]);
    }

    useEffect(() => {
        pickFirstTwoCards();

        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        setOpponentCardSymbols([symbol]);
    }, []);

    return (
        <div className='player-board'>
            { waiting && <p> Waiting...</p> }

            <div className="player-info-wrapper">
                <div className='player-info'>
                    <p style={{ fontSize: '1.5rem' }}>Your Cards</p>

                    <div>
                        <p style={{ top: '100px' }}>
                        { totalCardValue < 21 ?`Total Value: ${totalCardValue}` : `Burst`}
                        </p>
                    </div>
                    <button 
                        onClick={pickExtraCard}
                        disabled = { waiting }
                    >
                        Pick an extra card
                    </button>
                    <button
                        onClick={dealCards}
                        disabled = { waiting }
                    >
                        Submit
                    </button>
                </div>
                <div className="player-card-holder">
                    <CardHolder cards={cards}/>
                </div>
            </div>

            <hr style={{ margin: '2px 0' }}/>

            <div className="player-info-wrapper">
                <div className='player-info'>
                    <p style={{ fontSize: '1.5rem' }}>Opponent Cards</p>
                    {/* <div>
                        <p style={{ top: '170px' }}>{ `Total Value: ${opponentCardValue}`  }</p>
                    </div> */}
                </div>
                <div className="player-card-holder">
                    <CardHolder cards={parseOpponentCards()}/>
                </div>
            </div>
            
        </div>
    )
}