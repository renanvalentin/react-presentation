var ReactPresentationApp = require('./ReactPresentationApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactPresentationApp}>
    <Route name="/" handler={ReactPresentationApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
