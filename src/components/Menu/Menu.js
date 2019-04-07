import React from 'react';
import './Menu.scss'
import ButtonGroup from './ButtonGroup';
import LvlScore from './LvlScore';
import ActionButton from '../commons/ActionButton';

const menu = ({ lvlButtonClick , gameScore}) => {
    return (
        <div id="Menu" className="Menu">
            <div className="wrapper">
                <ButtonGroup header="Choose level">
                    <ActionButton
                        description="Easy"
                        click={lvlButtonClick}
                        level="0">
                        1
                    </ActionButton>
                    <ActionButton
                        description="Medium"
                        click={lvlButtonClick}
                        level="1">
                        2
                    </ActionButton>
                    <ActionButton
                        description="Hard"
                        click={lvlButtonClick}
                        level="2">
                        3
                    </ActionButton>
                    <ActionButton
                        locked="true"
                        description="Nightmare"
                        click={lvlButtonClick}
                        level="3">
                        <i class="far fa-dizzy"></i>
                    </ActionButton>
                </ButtonGroup >
                <ButtonGroup header="Your score">
                    <LvlScore gameScore={gameScore}/>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default menu