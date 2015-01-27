'use strict';

describe('Search', function () {
    var React = require('react/addons');
    var config = require('../../../src/scripts/config.js');
    var TestUtils = React.addons.TestUtils;
    var $ = require('jquery');
    var _ = require('lodash');

    var Search, component;


    beforeEach(function () {
        Search = require('../../../src/scripts/components/Search.js');
        component = React.createElement(Search);
    });

    it('should create a new instance of Search', function () {
        expect(component).toBeDefined();
    });

    it('should search for images when the user type the search input', function() {
        spyOn($, 'getJSON').and.returnValue({
            done: function(callback) {
            }
        });

        spyOn(_, 'debounce').and.callFake(function(fn, ms) {
            return fn;
        });


        var term = 'search';
        var url = `https://api.instagram.com/v1/tags/${term}/media/recent?client_id=${config.instagram.client_id}&callback=?`;
        var search = TestUtils.renderIntoDocument(
            <Search minLength={3} searchComplete={jasmine.any(Function)} />
        );

        var input = TestUtils.findRenderedDOMComponentWithTag(
            search, 'input');

        input.getDOMNode().value = term;
        React.addons.TestUtils.Simulate.change(input);


        expect($.getJSON).toHaveBeenCalledWith(url);
    });
});
