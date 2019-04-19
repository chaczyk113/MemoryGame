import React from 'react';
import './Menu.scss'
import ButtonGroup from './ButtonGroup/ButtonGroup';
import LvlScore from './LvlScore/LvlScore';
import ActionButton from '../Buttons/ActionBtn';

const menu = ({ lvlButtonClick, gameScore, gameProgress, gameLvl, gameStarted }) => {

    const buttonsData = [{ des: "Easy", lvl: 0, text: "1" }, { des: "Medium", lvl: 1, text: "2" }, { des: "Hard", lvl: 2, text: "3" }, { des: "Nightmare", lvl: 3, text: <i className="far fa-dizzy"></i> }];
    const buttonsArray = buttonsData.map((button, index) => {
        return (
            <ActionButton
                key={index}
                description={button.des}
                click={lvlButtonClick}
                gameLvl={gameLvl}
                gameStarted={gameStarted}
                level={button.lvl}
                locked={button.lvl <= gameProgress ? false : true}>
                {button.text}
            </ActionButton>
        )
    })
    let headerText = <>Your score (clicks)</>
    if (gameLvl === 3) {
        headerText = <>Your score (matches)</>
    }

    return (
        <div id="Menu" className="Menu">
            <div className="wrapper">
                <ButtonGroup header="Choose level">
                    {buttonsArray}
                </ButtonGroup >
                <ButtonGroup header={headerText} scoreList={true}>
                    <LvlScore gameLvl={gameLvl} gameScore={gameScore} />
                </ButtonGroup>
            </div>
        </div>
    )
}

export default menu