'use strict';

describe('FlyingObject', function () {
  var React = require('react/addons');
  var FlyingObject, component;

  beforeEach(function () {
    FlyingObject = require('../../../src/scripts/components/FlyingObject.js');
    component = React.createElement(FlyingObject);
  });

  it('should create a new instance of FlyingObject', function () {
    expect(component).toBeDefined();
  });
});
