import React, { Component } from 'react';

class Option extends Component {
	render() {
		return(
			<div className="box">
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Option;