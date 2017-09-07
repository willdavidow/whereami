import React from 'react';
import { render } from 'react-dom';

import Main from './screens/main';

render(<Main/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
