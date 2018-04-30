import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/Option.css';

class Option extends Component {

	handleClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return(
			<div className={this.props.classNames} onClick={this.handleClick}>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Option;