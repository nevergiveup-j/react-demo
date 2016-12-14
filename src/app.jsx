import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import rootRoute from './pages/router'
// import Layout from './layouts/layout'
// import List from './component/list/list'

render(
  (
    <Router
      history={browserHistory}
      routes={rootRoute}
      />
  ),
  document.getElementById('react-content')
);
