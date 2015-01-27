'use strict';

// Components
var React = require('react/addons');

var $ = require('jquery');
var _ = require('lodash');

// CSS
require('../../styles/Pagination.less');

var Pagination = React.createClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        searchComplete: React.PropTypes.func.isRequired
    },

    loadData: function(term) {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
            $.ajax({
                type: "GET",
                url: this.props.url,
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "jsonpcallback"
            }).done(this.props.searchComplete);
        }
    },

    componentWillMount: function () {
        $(window).on('scroll', this.loadData);
    },

    componentWillUnmount: function () {
        $(window).off('scroll', this.loadData);
    },

    render: function () {
        return (
            <div className="pagination">
                <button className="pagination-button" onClick={this.loadData}>
                    {this.props.label}
                </button>
            </div>
        );
    }
});

module.exports = Pagination;


