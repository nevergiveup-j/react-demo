import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import rootRoute from './router'

render(
  (
    <Router
      history={browserHistory}
      routes={rootRoute}
      />
  ),
  document.getElementById('react-content')
);
