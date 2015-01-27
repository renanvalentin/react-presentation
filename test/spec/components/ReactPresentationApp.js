'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var ReactPresentationApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactPresentationApp = require('../../../src/scripts/components/ReactPresentationApp.js');
    component = React.createElement(ReactPresentationApp);
  });

  it('should create a new instance of ReactPresentationApp', function () {
    expect(component).toBeDefined();
  });
});
