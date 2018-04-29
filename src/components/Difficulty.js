import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DifficultyChoice from './DifficultyChoice';
import '../styles/Difficulty.css';

class Difficulty extends Component {
	render(){
		return (
			<div>
				<h1>Difficulty?</h1>
				<div className="container">
					<DifficultyChoice 
						difficulty="easy" 
						difficultyChoice={this.props.difficultyChoice}
					/>
					<DifficultyChoice 
						difficulty="medium" 
						difficultyChoice={this.props.difficultyChoice}
					/>
					<DifficultyChoice 
						difficulty="hard" 
						difficultyChoice={this.props.difficultyChoice}
					/>
				</div>
				<Link to="/questions">
					<div className="mix box">
						<p>Mix it up!</p>
					</div>
				</Link>
			</div>
		);
	}
}

export default Difficulty;