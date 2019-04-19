import React from 'react';
import './Placeholder.scss';


const gamePlaceholder = () => {

    return (
        <div id="Game" className="GamePlaceholder" >
            <p className="main">Choose level to start a game!</p>
            <p>Win a given level to unlock the next one.</p>
            <p>Pass three levels to unlock <b>Nigthmare</b> mode, <br /> where mistakes are not allowed.</p>
            <p>Good luck, have fun! <i className="far fa-smile-wink"></i></p>
        </div>
    )
}

export default gamePlaceholder