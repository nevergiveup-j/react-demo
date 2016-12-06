import React from 'react';
import { Link } from 'react-router';

import styles from './index.scss';

const Wrap = React.createClass({
  render() {
    return (
      <div>React</div>
    )  
  }
})

const Anchor = React.createClass({
  render() {
    return (
      <div>
        <Wrap />
        <div>Anchor1</div>
      </div>
    );
  }
});

export default Anchor;

