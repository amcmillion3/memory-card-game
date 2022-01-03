import React from 'react';
import GameCard from './GameCard';

function CardContainer(props) {
    const { cards, handleCardClick } = props;

    const handleClick = (id) => handleCardClick(id);

    const cardList = cards.map(card => {
        const start = card.default.lastIndexOf('/') + 1;
        const end = card.default.indexOf('.');
        const characterName = card.default.substring(start, end);

        return (<GameCard src={card.default} alt={characterName} key={characterName} id={characterName} handleClick={handleClick} />);
    });

    return (
        <div className='card-container'>
            {cardList}
        </div>
    );
};

export default CardContainer;