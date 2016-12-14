import React, { Component } from 'react';

import styles from './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    console.log('page==== home');

    return (
      <div>
        <div>Home</div>
      </div>
    );
  }
}

export default Index;
