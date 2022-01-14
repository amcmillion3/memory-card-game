import React, { useEffect, useState } from 'react';
import "./header.css"

function Header(props) {
    const { clickedCards } = props;
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        setScore(clickedCards.length);
        setHighScore(highScore => {
            if (score > highScore)
                return score;
                else return highScore;
        });
    }, [clickedCards, score]);

    return (
        <header>
            <div>
                <h1>Naruto Memory Game</h1>
            </div>
            <div className='score'>
                <span>Score: {score}/24</span>
                <span>High Score: {highScore}/24</span>
            </div>
        </header>
    );
};

export default Header;