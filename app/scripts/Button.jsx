import { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Button extends Component {
	constructor() {
		super();

		this.state = {
			pos: 0,
			portion: 1 / 2
		};

		this.max = Math.pow(this.state.portion, -2);
		this.ctx = null;
		this.update = this.update.bind(this);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.pos < this.max;
	}

	update(e) {
		if (!this.ctx) {
			this.ctx = findDOMNode(this.props.canvas).getContext('2d');
		}

		let ctx = this.ctx;
		let pos = this.state.pos;
		let portion = this.state.portion;
		let size = {
			x: portion * ctx.canvas.width,
			y: portion * ctx.canvas.height
		};

		ctx.fillStyle = `${randomColor()}`;
		ctx.fillRect(
			(pos % Math.pow(portion, -1)) * size.x,
			(Math.floor(pos * portion)) * size.y,
			size.x,
			size.y);

		this.setState({
			pos: this.state.pos + 1
		});
	}
	render() {
		return (
			<button
				onClick={this.update}
				className="head">
				Hi
			</button>
		);
	}
}

Button.PropTypes = {
	canvas: PropTypes.element.isRequired
}

export default Button;
