import React, {PureComponent} from 'react';

import MainMap from '../../components/MainMap';
import GameBoard from '../../components/GameBoard';
import ScoreBoard from '../../components/ScoreBoard';

class MainScreen extends PureComponent {
  render() {
    return (
      <div className="main-screen">
        <MainMap />
        <GameBoard />
        <ScoreBoard />
      </div>
    );
  }
}

export default MainScreen;
