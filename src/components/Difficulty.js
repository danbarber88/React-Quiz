import React, { Component } from 'react';
import DifficultyChoice from './DifficultyChoice';
import '../styles/Difficulty.css';

class Difficulty extends Component {
	render(){
		return (
			<div className="difficulty-container">
				<DifficultyChoice difficulty="Easy" />
				<DifficultyChoice difficulty="Medium" />
				<DifficultyChoice difficulty="Hard" />
			</div>
		);
	}
}

export default Difficulty;