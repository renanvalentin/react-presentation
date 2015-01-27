'use strict';

describe('PhotoGrid', function () {
  var React = require('react/addons');
  var PhotoGrid, component;

  beforeEach(function () {
    PhotoGrid = require('../../../src/scripts/components/PhotoGrid.js');
    component = React.createElement(PhotoGrid);
  });

  it('should create a new instance of PhotoGrid', function () {
    expect(component).toBeDefined();
  });
});
