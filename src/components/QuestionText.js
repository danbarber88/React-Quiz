import React, { Component } from 'react';
import '../styles/QuestionText.css';

class QuestionText extends Component {
	render() {
		return (
			<div>
				<h1 className="question-number">Question: {this.props.questionNumber}</h1>
				<h2>{this.props.text}</h2>
			</div>
		);
	}
}

export default QuestionText;