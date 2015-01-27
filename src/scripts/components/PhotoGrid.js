'use strict';

var React = require('react/addons');

// CSS
require('../../styles/PhotoGrid.less');

// Components
var PhotoItem = require('./PhotoItem');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var PhotoGrid = React.createClass({
    propTypes: {
        images: React.PropTypes.array.isRequired
    },

    render: function () {
        return (
            <ReactCSSTransitionGroup component="ul" className="photo-grid" transitionName="images">
                    {this.props.images.map((image)=> {
                        console.log(image);
                        return (
                            <PhotoItem key={image.id} image={image.images.thumbnail} />
                        );
                    })}
            </ReactCSSTransitionGroup >
        );
    }
});

module.exports = PhotoGrid;


