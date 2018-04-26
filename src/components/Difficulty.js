import React, { Component } from 'react';
import DifficultyChoice from './DifficultyChoice';
import '../styles/Difficulty.css';

class Difficulty extends Component {
	render(){
		return (
			<div>
				<h1>Difficulty?</h1>
				<div className="difficulty-container">
					<DifficultyChoice difficulty="easy" />
					<DifficultyChoice difficulty="medium" />
					<DifficultyChoice difficulty="hard" />
				</div>
				<div className="mix box">
					<p>Mix it up!</p>
				</div>
			</div>
		);
	}
}

export default Difficulty;