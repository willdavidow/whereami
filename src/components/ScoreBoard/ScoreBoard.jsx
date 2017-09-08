import React, {PureComponent} from 'react';

class ScoreBoard extends PureComponent {
  render() {
    return (
      <div
        style={{
          position: `absolute`,
          bottom: `10px`,
          left: `10px`,
            backgroundColor: `#cccccc`,
            width: `300px`,
            height: `150px`,
            zIndex: 2
        }}
      >
        SCORE!
      </div>
    );
  }
}

export default ScoreBoard;
