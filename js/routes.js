'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

module.exports = function(){
    return [
        <Route name="app" path="/" handler={require('./views/app')}>
            <Route name="about" handler={require('./views/about/about')}/>
            <Route name="home" handler={require('./views/home/home')}/>
        </Route>,
        <NotFoundRoute name="404" handler={require('./components/404/404')}/>
    ];
}

