import React from 'react';

function GameCard(props) {
    const { src, alt, id, handleClick } = props;

    const handleCardClick = () => handleClick(id);

    return (
        <div className='game-card'>
            <img src={src} alt={alt} id={id} onClick={handleCardClick} />
        </div>
    )
};

export default GameCard;