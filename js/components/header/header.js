'use strict';
var React = require('react');

require('./header.scss');

var Header = React.createClass({
    render: function (){
        return (
            <header className="ui-header">
                Header
            </header>
        );
    }
});

module.exports = Header;