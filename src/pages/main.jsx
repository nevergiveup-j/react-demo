import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// import '../static/sass/common.scss';
import Layout from '../layouts/layout';

// 首页
import Index from '../component/index/index';
// 列表
import List from '../component/list/list';

render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <Route path="list" component={List}>

        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('react-content')
);
