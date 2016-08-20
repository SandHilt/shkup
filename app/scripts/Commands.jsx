import Button from './Button';

class Commands extends Component {
	render() {
		return (
			<header className="header-commands">
				<Button
					canvas={this.props.canvas} />
				<Button />
				<Button />
			</header>
		);
	}
}

export default Commands;
