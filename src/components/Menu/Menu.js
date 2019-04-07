import React from 'react';
import './Menu.scss'
import ButtonGroup from './ButtonGroup';
import LvlScore from './LvlScore';
import ActionButton from '../commons/ActionButton';

const menu = ({ lvlButtonClick, gameScore, gameProgress }) => {

    const buttonsData = [{ des: "Easy", lvl:0, text:"1" }, { des: "Medium", lvl:1, text:"2" }, { des: "Hard", lvl:2, text:"3" }, { des: "Nightmare", lvl:3, text:<i className="far fa-dizzy"></i> }];
    const buttonsArray = buttonsData.map((button, index) => {
        return (
            <ActionButton
                key = {index}
                description={button.des}
                click={lvlButtonClick}
                level={button.lvl}
                locked = {button.lvl <= gameProgress?false:true}>
                {button.text}
             </ActionButton>
        )
    })
    return (
        <div id="Menu" className="Menu">
            <div className="wrapper">
                <ButtonGroup header="Choose level">
                    {buttonsArray}
                </ButtonGroup >
                <ButtonGroup header="Your score">
                    <LvlScore gameScore={gameScore} />
                </ButtonGroup>
            </div>
        </div>
    )
}

export default menu