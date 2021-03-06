import React, { Component } from 'react';
import './App.scss';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Game from '../components/Game/Game';
import GamePlaceholder from '../components/Game/Placeholder/Placeholder';
import Popup from "../components/Game/Popup/Popup";
import WinPopup from "../components/Game/WinPopup/WinPopup";
import Footer from '../components/Footer/Footer';

import config from '../config/config.json'


class App extends Component {

  state = {
    gameStarted: false,
    cardsObj: [],
    lvl: 0,
    isNewGame: false,
    reversedCards: [],
    matchedCouples: 0,
    isWin: false,
    isNewRecord: false,
    clickCounter: 0,
    gameAreaWidth: 0,
    gameAreaStyle: {},
    gameScore: [{ last: 0, top: 0 }, { last: 0, top: 0 }, { last: 0, top: 0 }, { last: 0, top: 0 }],
    gameProgress: 0
  }

  buttonLocker = false;

  cardColor = config.cardColors[0];
  cardSize = 200; //random value


  randomIcons = (lvlRangeSize) => {
    let newCardsObj = []; //Object with whole lvl cards data
    let cardsIds = []; //Array of indexes for cards in game
    let iconsList = [...config.icons]; //Copy of default icons set

    for (let i = 0; i < (lvlRangeSize); i++) {
      cardsIds.push(i); // creates array of indexes for set game range
      newCardsObj.push(i); // creates a placeholder of cards data
    }
    let index;
    while (cardsIds.length > 0) {
      const iconId = Math.floor(Math.random() * iconsList.length);
      const icon = iconsList.splice(iconId, 1)[0];

      index = cardsIds.splice(Math.floor(Math.random() * cardsIds.length), 1)[0];
      // select index for 1st card of couple with same icon and removes it from list
      newCardsObj[index] = {
        icon: icon,
        isReversed: false,
      };

      index = cardsIds.splice(Math.floor(Math.random() * cardsIds.length), 1);
      // select index for 2nd card of couple with same icon and removes it from list
      newCardsObj[index] = {
        icon: icon,
        isReversed: false,
      };

    }
    return newCardsObj;
  }

  endGameHandler = (score) => {
    console.log("engGame")
    let gameScore = [...this.state.gameScore];
    let gameProgress = this.state.gameProgress;
    let isNewRecord = false;
    gameScore[this.state.lvl].last = score
    // new Record
    if (this.state.lvl < 3 && gameScore[this.state.lvl].top > 0 && score < gameScore[this.state.lvl].top) {
      gameScore[this.state.lvl].top = score;
      isNewRecord = true;
    }
    else if (gameScore[this.state.lvl].top === 0) {
      gameScore[this.state.lvl].top = score;
      isNewRecord = true;
    }
    else if (this.state.lvl === 3 && gameScore[this.state.lvl].top > 0 && score > gameScore[this.state.lvl].top) {
      gameScore[this.state.lvl].top = score;
      isNewRecord = true;
    }
    // progress made
    if (gameProgress < 4 && this.state.lvl === gameProgress) {
      gameProgress++;
    }
    // save progress
    this.setState({ gameScore: gameScore, gameProgress: gameProgress, isNewRecord: isNewRecord })
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('gameScore', JSON.stringify(this.state.gameScore));
      localStorage.setItem('gameProgress', gameProgress);
    }
  }

  cardClickHandler = (index) => {

    if (!this.buttonLocker && this.state.cardsObj[index].isReversed) {
      this.buttonLocker = true;

      let reversedCards = [...this.state.reversedCards];
      let modifiedCardObj = [...this.state.cardsObj];
      let matchedCouples = this.state.matchedCouples;
      let isWin = this.state.isWin;
      let clickCounter = this.state.clickCounter;
      let isFailure = false;
      modifiedCardObj[index].isReversed = false;
      clickCounter++;

      if (reversedCards.length === 0) {
        reversedCards[0] = index;
      }
      else {
        reversedCards[1] = index;
        // checks if there is a match
        if (modifiedCardObj[index].icon === modifiedCardObj[reversedCards[0]].icon) {
          reversedCards = [];
          matchedCouples++;
          // Checks if we won the game!
          if (matchedCouples === config.lvlRange[this.state.lvl].size / 2) {
            isWin = true;
            this.endGameHandler(clickCounter);
          }
        }
        // in case of fail
        else {
          // if not nightmare
          if (this.state.lvl !== 3) {

            setTimeout(() => {
              modifiedCardObj[reversedCards[0]].isReversed = true;
              modifiedCardObj[reversedCards[1]].isReversed = true;
              reversedCards = [];
              this.setState({ cardsObj: modifiedCardObj, reversedCards: reversedCards })
              this.buttonLocker = false;
            }, 600);
          }
          else {
            this.endGameHandler(matchedCouples);
            isFailure = true;
          }
        }
      }

      this.setState({ cardsObj: modifiedCardObj, reversedCards: reversedCards, isNewGame: false, matchedCouples: matchedCouples, isWin: isWin, clickCounter: clickCounter }, () => {
        // when failder in nightmare mode
        if (isFailure) {
          setTimeout(() => {
            this.reverseAllCards();
            setTimeout(() => {
              this.startNewGame(this.state.lvl);
              this.buttonLocker = false;
            }, 600);
          }, 600);
        }
        else if (reversedCards.length < 2) {
          this.buttonLocker = false;
        }
      })
    }
  }

  replyClickHandler = () => {
    this.startNewGame(this.state.lvl);
  }

  cancelClickHandler = () => {
    this.setState({ gameStarted: false, isWin: false });
  }

  startNewGame = (lvl) => {
    let lvlRangeSize = config.lvlRange[lvl].size;
    const newCardsObj = this.randomIcons(lvlRangeSize);
    this.cardColor = config.cardColors[Math.floor(Math.random() * config.cardColors.length)];
    this.cardSize = (this.state.gameAreaWidth - 10 * (parseInt(config.lvlRange[lvl].x) - 1)) / parseInt(config.lvlRange[lvl].x);
    this.setState({
      gameStarted: true,
      cardsObj: newCardsObj,
      lvl: lvl,
      isNewGame: true,
      isWin: false,
      clickCounter: 0,
      matchedCouples: 0,
      reversedCards: []
    }, () => {
      setTimeout(() => {
        this.reverseAllCards();
      }, config.reverseTime[lvl])
    });
  }

  reverseAllCards = () => {
    let modifiedCardObj = [...this.state.cardsObj];
    for (const cardObj of modifiedCardObj) {
      cardObj.isReversed = true;
    }
    this.setState({ cardsObj: modifiedCardObj, isNewGame: false });
  }

  lvlButtonClickHanlder = (lvl) => {
    if (!this.state.gameStarted || lvl !== this.state.lvl) {
      this.startNewGame(lvl);
    }
  }

  componentDidMount() {
    let height = window.innerHeight - 150 - 32;
    let width = height * 1.66;

    if (window.innerWidth < 768) {
      width = window.innerWidth * 0.96;
      height = width / 1.66;
    }

    this.setState({
      gameAreaWidth: width,
      gameAreaStyle: {
        height: height + 'px',
        // width: width + 'px',
      }
    });
    const savedProgress = localStorage.getItem('gameProgress');
    const savedGameScore = JSON.parse(localStorage.getItem('gameScore'));
    if (savedProgress && savedGameScore) {
      this.setState({
        gameScore: savedGameScore,
        gameProgress: savedProgress
      })
    }
  }

  render() {
    let gameContent = null;
    let gameInfo = null;

    if (this.state.gameStarted) {
      gameContent =
        <Game lvl={this.state.lvl} lvlSize={config.lvlRange[this.state.lvl]} cardsObj={this.state.cardsObj} cardSize={this.cardSize} cardColor={this.cardColor} cardClick={(key, e) => this.cardClickHandler(key, e)} />
    }

    if (this.state.isWin) {
      gameInfo = <Popup>
        <WinPopup isNewRecord={this.state.isNewRecord} clickCounter={this.state.clickCounter} replayClick={this.replyClickHandler} cancelClick={this.cancelClickHandler} lvl={this.state.lvl} nextLvlClick={(lvl, e) => this.lvlButtonClickHanlder(lvl, e)} />
      </Popup>
    }

    if (!this.state.gameStarted) {
      gameInfo = <GamePlaceholder />;
    }

    return (
      <div className="App">
        <Header />
        <Menu gameLvl={this.state.lvl} gameStarted={this.state.gameStarted} gameProgress={this.state.gameProgress} lvlButtonClick={(lvl, e) => this.lvlButtonClickHanlder(lvl, e)} gameScore={this.state.gameScore[this.state.lvl]} />
        <div id="Game" className="gameArea" style={this.state.gameAreaStyle}>
          {gameContent}
          {gameInfo}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;

