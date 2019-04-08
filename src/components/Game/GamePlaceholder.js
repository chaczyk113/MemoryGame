import React from 'react';
import './Game.scss';
import WinPopup from "./WinPopup";

const gamePlaceholder = (props) => {
    let placeholderContent;
    if (props.isWin) {
        placeholderContent = <WinPopup clickCounter={props.clickCounter} replayClick={props.replayClick} cancelClick={props.cancelClick} lvl={props.lvl} isNewRecord={props.isNewRecord} nextLvlClick = {props.nextLvlClick}/>
    }
    else {
        placeholderContent = (
            <div>
                <p className="main">Choose level to start a game!</p>
                <p>Win a given level to unlock the next one.</p>
                <p>Pass three levels to unlock <b>Nigthmare</b> mode, <br /> where mistakes are not allowed.</p>
                <p>Good luck, have fun! <i className="far fa-smile-wink"></i></p>
            </div>
        )
    }

    return (
        <div id="Game" className="GamePlaceholder" >
            {placeholderContent}
        </div>
    )
}

export default gamePlaceholder