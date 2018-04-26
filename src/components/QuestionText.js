import React, { Component } from 'react';
import '../styles/QuestionText.css';

class QuestionText extends Component {
	render() {
		return (
			<h2>{this.props.text}</h2>
		);
	}
}

export default QuestionText;