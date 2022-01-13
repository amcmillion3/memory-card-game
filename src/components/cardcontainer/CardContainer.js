import React from 'react';
import GameCard from '../gamecard';

function CardContainer(props) {
    const { cards, handleCardClick } = props;

    const handleClick = (id) => handleCardClick(id);

    const cardList = cards.map(card => {
        const start = card.lastIndexOf('/') + 1;
        const end = card.indexOf('.');
        const characterName = card.substring(start, end);

        return (<GameCard src={card} alt={characterName} key={characterName} id={characterName} handleClick={handleClick} />);
    });

    return (
        <main className='card-container'>
            {cardList}
        </main>
    );
};

export default CardContainer;