'use strict';

// Components
var React = require('react/addons');
var config = require('../config');

var $ = require('jquery');
var _ = require('lodash');


// CSS
require('../../styles/Search.less');

var _lazySearch;

var Search = React.createClass({
    propTypes: {
        minLength: React.PropTypes.number.isRequired,
        waitTime: React.PropTypes.number,
        searchComplete: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            value: ''
        }
    },

    getDefaultProps: function () {
        return {
            waitTime: 300
        }
    },

    componentWillMount: function () {
        _lazySearch = _.debounce(this.lookup, this.props.waitTime);
    },

    componentWillUnmount: function () {
        _lazySearch = null;
    },

    startTyping: function (e) {
        var term = e.currentTarget.value;
        this.setState({
            value: term
        });

        _lazySearch(term);
    },

    lookup: function(term) {
        if(term.length < this.props.minLength) {
            return;
        }

        var url = `https://api.instagram.com/v1/tags/${term}/media/recent?client_id=${config.instagram.client_id}&callback=?`;
        $.getJSON(url).done(this.props.searchComplete);
    },

    render: function () {
        var cx = React.addons.classSet;
        var classes = cx({
            'input': true,
            'input--minoru': true,
            'input--filled': this.state.value.length > 0
        });

        return (
            <div className="search-box">
                <span className={classes}>
                    <input className="input__field input__field--yoko input__field--search-box" type="text" id="search-box" value={this.state.value} onChange={this.startTyping} />
                    <label className="input__label input__label--yoko input__label--search-box" htmlFor="search-box">
                    </label>
                </span>
            </div>
        );
    }
});

module.exports = Search;


