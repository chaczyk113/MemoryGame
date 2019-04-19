import React from 'react';
import './Game.scss'
import Card from "./Card/Card";


const game = (props) => {

    const gridStyle = {
        gridTemplateColumns: 'auto '.repeat(props.lvlSize.x),
    }

    const cardsGird = props.cardsObj.map((cardData, index) => {
        return <Card size={props.cardSize} isReversed={cardData.isReversed} cardIcon={cardData.icon} cardColor={props.cardColor} key={`${props.lvl}-${index}`} id={index} cardClick={props.cardClick} />
    });

    return (
        <div id="Game" className="Game">
            <div className="wrapper" style={gridStyle}>
                {cardsGird}
            </div>
        </div>
    )
}

export default game