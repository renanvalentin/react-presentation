'use strict';

var React = require('react/addons');

require('../../styles/PhotoItem.less');

var PhotoItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <li className="photo-item">
                <img src={this.props.image.url} height={this.props.image.height} width={this.props.image.width} />
            </li>
        );
    }
});

module.exports = PhotoItem;


