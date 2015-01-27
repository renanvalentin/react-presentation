'use strict';

describe('Pagination', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var $ = require('jquery');
    var Pagination, component;

    beforeEach(function () {
        Pagination = require('../../../src/scripts/components/Pagination.js');
        component = React.createElement(Pagination);
    });

    it('should create a new instance of Pagination', function () {
        expect(component).toBeDefined();
    });

    it('should load more data when the user reach to bottom of the page', function() {
        spyOn($, 'ajax').and.returnValue({
            done: function(callback) {
            }
        });

        var url = "http://api.instagram.com";
        var pagination = TestUtils.renderIntoDocument(
            <Pagination label="Loading more..." url={url} searchComplete={jasmine.any(Function)} />
        );

        window.scrollTo(0,1000);
        $(window).trigger('scroll');

        expect($.ajax).toHaveBeenCalledWith({
            type: "GET",
            url: url,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "jsonpcallback"
        });
    });
});
