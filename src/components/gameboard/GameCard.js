import React from 'react';

function GameCard(props) {
    const { src, alt, id, handleClick } = props;

    const handleCardClick = () => handleClick(id);

    return (
        <div className='game-card'>
            <img src={src} alt={alt} id={id} onClick={handleCardClick} />
            <br />
            <span>{alt}</span>
        </div>
    )
};

export default GameCard;