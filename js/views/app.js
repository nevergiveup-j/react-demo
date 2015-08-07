'use strict';
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('../components/header/header');
var Footer = require('../components/footer/footer');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler />
                <Footer />
            </div>
        )
    }
});

module.exports = App;