import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      presses: 0,
    };
  },
  render() {
    return (
      <div>
        <div>header</div>
        {this.props.children}
      </div>
    );
  }
});

export default App;

