import React from 'react';
import { render } from 'react-dom';

import Main from './screens/main';

render(<Main/>, document.getElementById('app'));

// DEV ONLY (needed for hmr)
if (module.hot) {
  module.hot.accept();
}
