import React, { Component } from 'react';
import '../styles/Quiz.css';

import CategoryContainer from './CategoryContainer';

class Quiz extends Component {
	render () {
		return (
			<div>
				<h1>Category?</h1>
				<CategoryContainer />
			</div>
		);
	}
}

export default Quiz;