import React from 'react';
import './Game.scss'
import ActionButton from '../commons/ActionButton';

const winPopup = (props) => {

    return (
        <div className="WinPopup">
            <p>Winner!</p>
            <p>{`You did it in: ${props.clickCounter} clicks!`}</p>
            <div className="winButtons">
                <ActionButton
                    description="Reply"
                    click={props.replayClick}
                    level="0">
                    <i className="fas fa-undo-alt"></i>
                </ActionButton>
                <ActionButton
                    description="Next level"
                    click={props.nextLvlClick}
                    level={props.lvl + 1}>
                    <i className="fas fa-arrow-right"></i>
                </ActionButton>
                <ActionButton
                    description="Cancel"
                    click={props.cancelClick}
                    level="0">
                    <i className="fas fa-times"></i>
                </ActionButton>
            </div>
        </div>
    )
}

export default winPopup