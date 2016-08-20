import React, { Component, PropTypes } from 'react';
import { Render } from 'react-dom';
import Commands from './Commands';
import Canvas from './Canvas';
import Footer from './Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			canvas: null
		};
	}
	render() {
		return (
			<div
				id='react-root'>
				<Commands canvas={this.state.canvas} />
				<Canvas ref="canvas" />
				<Footer />
			</div>
		);
	}
	componentDidMount() {
		this.setState({
			canvas: this.refs.canvas
		});
	}
}

Render(
	<App />,
	document.getElementById('app')
);

export default App;
