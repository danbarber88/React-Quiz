import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DifficultyChoice extends Component {
	render() {
		return(
			<div className={`box ${this.props.difficulty}`}>
				<p className="difficulty-text">{this.props.difficulty}</p>
			</div>
		);
	}
}

export default DifficultyChoice;