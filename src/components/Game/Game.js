import React, { Component } from 'react';
import './Game.scss'
import Card from "./Card";
import config from '../../config/config.json'

class Game extends Component {
    state={};
    static getDerivedStateFromProps(props, state) {
        if (props.newGame) {
            return {
                gridStyle: {
                    height: '100%',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'auto '.repeat(props.lvlSize.x),
                    gridGap: '10px'
                },
                cardSize: (props.gameWidth - 10 * (props.lvlSize.x - 1)) / props.lvlSize.x,
                cardColor: config.cardColors[Math.floor(Math.random() * config.cardColors.length)]
            }
        }
        return null;
    }


    render() {
        const cardsGird = this.props.cardsObj.map((cardData, index) => {
            return <Card size={this.state.cardSize} isReversed={cardData.isReversed} isMatched={cardData.isMatched} cardIcon={cardData.icon} cardColor={this.state.cardColor} key={`${this.props.lvl}-${index}`} id={index} cardClick={this.props.cardClick} />
        });
        return (
            <div id="Game" className="Game">
                <div className="wrapper" style={this.state.gridStyle}>
                    {cardsGird}
                </div>
            </div>
        )
    }
}

export default Game