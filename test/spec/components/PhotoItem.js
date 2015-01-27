'use strict';

describe('PhotoItem', function () {
  var React = require('react/addons');
  var PhotoItem, component;

  beforeEach(function () {
    PhotoItem = require('../../../src/scripts/components/PhotoItem.js');
    component = React.createElement(PhotoItem);
  });

  it('should create a new instance of PhotoItem', function () {
    expect(component).toBeDefined();
  });
});
