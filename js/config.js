'use strict';
var React = require('react');

var MainComponent = React.createClass({
    render: function () {
        return (
            <div className="component-hello">
                这是文字
            </div>
        )
    }
});

React.render(<MainComponent />, document.body);