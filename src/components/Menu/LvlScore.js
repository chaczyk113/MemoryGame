import React from 'react';
import './LvlScore.scss'

const lvlScroe = ({ gameScore }) => {

    return (
        <div className="LvlScore">
            <p>{`Last score: ${gameScore.last}`}</p>
            <p>{`Top score: ${gameScore.top}`}</p>
        </div>
    )
}

export default lvlScroe;