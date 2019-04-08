import React from 'react';
import './LvlScore.scss'

const lvlScroe = ({ gameScore }) => {

    return (
        <div className="LvlScore">
            <p>Last: <b>{gameScore.last}</b></p>
            <p>Top: <b>{gameScore.top}</b></p>
        </div>
    )
}

export default lvlScroe;