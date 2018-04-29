import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/Option.css';

class Option extends Component {
	constructor(props) {
		super(props)

		this.state = ({
			classNames: "box",
		});
	}

	handleClick = () => {
		this.setState({
			classNames: this.props.checkAnswer(this.props.text) ? "box correct" : "box incorrect",
		});
		setTimeout(() => {
			this.setState({ classNames: "box"});
			this.props.nextQuestion();
		}, 2000);
	}

	render() {
		return(
			<div className={this.state.classNames} onClick={this.handleClick}>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Option;