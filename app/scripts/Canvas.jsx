import { Component } from 'react';

class Canvas extends Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
	}
	update(e) {

	}
	render() {
		return (
			<canvas
				id="drawer"
				ref="canvas">
				Seu navegador não suporta canvas.
			</canvas>
		);
	}
}

Canvas.propTypes = {
	square: PropTypes.number,
};


export default Canvas;
