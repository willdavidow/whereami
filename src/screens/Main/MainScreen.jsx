import React, {PureComponent} from 'react';

import MainMap from '../../components/MainMap';
import MiniMap from '../../components/MiniMap';
import ScoreBoard from '../../components/ScoreBoard';

class MainScreen extends PureComponent {
  render() {
    return (
      <div>
        <MainMap />
        <MiniMap />
        <ScoreBoard />
      </div>
    );
  }
}

export default MainScreen;
