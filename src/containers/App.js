import React, { Component } from 'react';
import './App.scss';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Game from '../components/Game/Game';
import GamePlaceholder from '../components/Game/GamePlaceholder';
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
        isMatched: false
      };

      index = cardsIds.splice(Math.floor(Math.random() * cardsIds.length), 1);
      // select index for 2nd card of couple with same icon and removes it from list
      newCardsObj[index] = {
        icon: icon,
        isReversed: false,
        isMatched: false
      };

    }
    return newCardsObj;
  }

  winGameHandler = (clickCounter) => {
    let gameScore = [...this.state.gameScore];
    let gameProgress = this.state.gameProgress;
    let isNewRecord = false;
    gameScore[this.state.lvl].last = clickCounter;
    // new Record
    if (gameScore[this.state.lvl].top > 0 && clickCounter < gameScore[this.state.lvl].top) {
      gameScore[this.state.lvl].top = clickCounter;
      isNewRecord = true;
    }
    else if (gameScore[this.state.lvl].top === 0) {
      gameScore[this.state.lvl].top = clickCounter;
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
          modifiedCardObj[index].isMatched = true;
          modifiedCardObj[reversedCards[0]].isMatched = true;
          reversedCards = [];
          matchedCouples++;
          // Checks if we won the game!
          if (matchedCouples === config.lvlRange[this.state.lvl].size / 2) {
            isWin = true;
            this.winGameHandler(clickCounter);
            matchedCouples = 0;
          }
        }
        // in case of fail
        else {
          // if not nightmare
          console.log('fail ' + this.state.lvl);
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
        else if (reversedCards.length < 2){
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
    console.log(newCardsObj);
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
      console.log("State setted");
      console.log(this.state);
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
    const height = window.innerHeight - 150 - 32;
    const width = height * 1.66;
    this.setState({
      gameAreaWidth: width,
      gameAreaStyle: {
        height: height + 'px',
        width: width + 'px',
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
        <Game lvlSize={config.lvlRange[this.state.lvl]} lvl={this.state.lvl} cardsObj={this.state.cardsObj} cardClick={(key, e) => this.cardClickHandler(key, e)} newGame={this.state.isNewGame} gameWidth={this.state.gameAreaWidth} />
    }
    if (!this.state.gameStarted || this.state.isWin) {
      gameInfo = <GamePlaceholder isWin={this.state.isWin} isNewRecord={this.state.isNewRecord} clickCounter={this.state.clickCounter} replayClick={this.replyClickHandler} cancelClick={this.cancelClickHandler} lvl={this.state.lvl} nextLvlClick={(lvl, e) => this.lvlButtonClickHanlder(lvl, e)} />;
    }

    return (
      <div className="App">
        <Header />
        <Menu gameLvl={this.state.lvl} gameStarted={this.state.gameStarted} gameProgress={this.state.gameProgress} lvlButtonClick={(lvl, e) => this.lvlButtonClickHanlder(lvl, e)} gameScore={this.state.gameScore[this.state.lvl]} />
        <div className="gameArea" style={this.state.gameAreaStyle}>
          {gameContent}
          {gameInfo}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;

