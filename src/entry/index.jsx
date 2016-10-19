import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import '../static/sass/common.scss'
import Layout from 'COMMON/layout';

// 首页
import Index from '../component/index/index';
// 列表
import List from '../component/list/list';

render((
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index}/>
        <Route path="list" component={List}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('react-content')
);
