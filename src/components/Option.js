import React, { Component } from 'react';
import he from 'he';
import '../styles/Option.css';

class Option extends Component {

	handleClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return(
			<div className={this.props.classNames} onClick={this.handleClick}>
				<p>{he.decode(this.props.text)}</p>
			</div>
		);
	}
}

export default Option;