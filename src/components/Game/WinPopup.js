import React from 'react';
import './Game.scss'
import ActionButton from '../commons/ActionButton';

const winPopup = (props) => {

    return (
        <div className="WinPopup">
            <div>
                <p>Winner!</p>
                <p>{`Score: ${props.clickCounter} clicks`}</p>
                {props.isNewRecord ? <p><strong>New Record!</strong></p> : null
                }
            </div>
            <div className="winButtons">
                <ActionButton
                    description="Reply"
                    click={props.replayClick}
                    level="0">
                    <i className="fas fa-undo-alt"></i>
                </ActionButton>
                {/* don't show next level button when it's last level */}
                {props.lvl < 3 ? (
                    <ActionButton
                        description="Next level"
                        click={props.nextLvlClick}
                        level={props.lvl + 1}>
                        <i className="fas fa-arrow-right"></i>
                    </ActionButton>
                ) : null}
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