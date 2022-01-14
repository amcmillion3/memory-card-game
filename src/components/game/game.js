import React, { useState, useEffect } from 'react';
import CardContainer from '../cardcontainer';
import Header from '../header';
import "./game.css";

function Game(props) {
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    const getShuffledCards = cards => {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let current = shuffledCards[i];
            shuffledCards[i] = shuffledCards[j];
            shuffledCards[j] = current;
        };
        setCards(shuffledCards);
    };

    useEffect(() => {
        const importAllCards = card => card.keys().map(card);
        const importedCards = importAllCards(require.context('../images', false, /\.(png|jpe?g|svg)/));
        setCards(importedCards);
        return importedCards;
    }, []);

    const handleCardClick = (id) => {
        getShuffledCards(cards);
        if (clickedCards.some(cardId => cardId === id)) {
            setClickedCards([]);
            return;
        }
        setClickedCards(clickedCards => {
            return [...clickedCards, id];
        });
    };

    return (
        <div className='game-container'>
            <Header clickedCards={clickedCards} />
            <CardContainer cards={cards} handleCardClick={handleCardClick} />
        </div>
    );
};

export default Game;