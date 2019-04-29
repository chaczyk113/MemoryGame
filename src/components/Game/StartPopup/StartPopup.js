import React from 'react'
import ActionButton from '../../Buttons/ActionBtn';

const StartPopup = (props) => {
    return (
        <>
            <div className="WinPopup">
                <p>Start game!</p>
            </div>
            <div className="winButtons">
                <ActionButton
                    description="Play"
                    click={props.playClick}
                    level="0">
                    <i className="far fa-play-circle"></i>
                </ActionButton>
                <ActionButton
                    description="Cancel"
                    click={props.cancelClick}
                    level="0">
                    <i className="fas fa-times"></i>
                </ActionButton>
            </div>
        </>
    )
}

export default StartPopup
