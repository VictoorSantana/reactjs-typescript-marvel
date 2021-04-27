import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';

import './themes/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

