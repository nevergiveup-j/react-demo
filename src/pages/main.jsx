import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import '../static/sass/common.scss';
import Layout from '../layouts/layout';

// 首页
// import Index from '../component/index/index';
// 列表
// import List from '../component/list/list';

render(
  (
    <div>
      header
    </div>
  ),
  document.getElementById('react-content')
);


{/* <Router history={hashHistory}>
  <Route path="/" component={Layout}>
  </Route>
</Router> */}
