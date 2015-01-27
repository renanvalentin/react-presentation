'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

// Components
var Search = require('./Search');
var PhotoGrid = require('./PhotoGrid');
var Pagination = require('./Pagination');

var ReactPresentationApp = React.createClass({
        getInitialState: function () {
            return {
                images: []
            }
        },

        searchComplete: function (query) {
            this.setState({
                images: query.data,
                nextUrl: query.pagination.next_url
            });
        },

        paginationComplete: function(query) {
            this.setState({
                images: this.state.images.concat(query.data),
                nextUrl: query.pagination.next_url
            });
        },

        render: function () {
            var pagination;

            if(this.state.nextUrl) {
                pagination = <Pagination label="Loading more..." url={this.state.nextUrl} searchComplete={this.paginationComplete} />;
            }

            return (
                <div className='main'>
                    <Search minLength={3} searchComplete={this.searchComplete} />
                    <PhotoGrid images={this.state.images} />
                    {pagination}
                </div>
            );
        }
    });

module.exports = ReactPresentationApp;
