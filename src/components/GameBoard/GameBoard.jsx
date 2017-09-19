import React, { PureComponent } from 'react';

import GameBoardContainer from './GameBoard.style';
import MiniMap from './components/MiniMap';
import RoundTimer from './components/RoundTimer';

class GameBoard extends PureComponent {
  render() {
    return (
      <GameBoardContainer>
        <MiniMap />
        <button type="button">Submit Guess!</button>
        <RoundTimer />
      </GameBoardContainer>
    )
  }
}

export default GameBoard;
