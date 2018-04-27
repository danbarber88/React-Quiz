import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DifficultyChoice extends Component {
	handleClick = () => {
		return this.props.difficultyChoice(this.props.difficulty);
	}

	render() {
		return(
			<Link to="/question" onClick={this.handleClick}>
				<div className={`box ${this.props.difficulty}`} onClick={this.handleClick}>
					<p className="difficulty-text">{this.props.difficulty}</p>
				</div>
			</Link>
		);
	}
}

export default DifficultyChoice;