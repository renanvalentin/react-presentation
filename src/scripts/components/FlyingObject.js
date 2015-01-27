'use strict';

var React = require('react/addons');


require('../../styles/FlyingObject.less');


var FlyingObject = React.createClass({
	getInitialState: function() {
		return { 
			y: 0
		};
	},	

	animate: function() {
		this.getDOMNode().style.webkitTransform = "translateY(" + this.state.y + "px)";

		this.setState({
			y: this.state.y - this.props.velocity,
			height: this.state.height
		});		

		if(this.state.y < 0 && this.state.y < (this.state.height - 50) * -1) {
			this.setInitialPosition();
		}

		this.playAnimation();
	},

	playAnimation: function() {
		this.interval = requestAnimationFrame(this.animate);
	},

	setInitialPosition: function() {
		if(this.props.startPosition == "bottom") {
			this.setState({
				y: document.body.clientHeight,
				height: this.getDOMNode().clientHeight
			});
		}

		this.getDOMNode().style.left = this.props.x;
	},

	

	componentDidMount: function() {
		this.setInitialPosition();
		this.playAnimation();
	},

	componentWillUnmount: function() {
		cancelAnimationFrame(this.interval);
	},	

	render: function () {
		return (
			<div className="flying-object">
				{this.props.children}
			</div>
		);
	}
});

module.exports = FlyingObject;


