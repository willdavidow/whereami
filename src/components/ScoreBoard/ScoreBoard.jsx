import React, {PureComponent} from 'react';
import ScoreboardContainer from './ScoreBoard.style';

class ScoreBoard extends PureComponent {
  render() {
    return (
      <ScoreboardContainer>
        <header>Scoreboard</header>
        <ul className="scoreboard__list">
          <li className="scoreboard__item" data-label="Current Round">1/5</li>
          <li className="scoreboard__item" data-label="Last Round Score">100</li>
          <li className="scoreboard__item" data-label="Total Score">1000</li>
        </ul>
      </ScoreboardContainer>
    );
  }
}

export default ScoreBoard;
