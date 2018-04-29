import React, { Component } from 'react';
import Option from './Option';

import shuffle from 'shuffle-array';

class OptionContainer extends Component {
	shuffleAnswers = () => {
		const correctAnswer = this.props.correct;
		let answers = this.props.incorrect.concat(correctAnswer);
		shuffle(answers);
		return answers
	}

	render() {
		let answers = this.shuffleAnswers().map((answer, i) => (
			<Option 
				key={i}
				text={answer}
				checkAnswer={this.props.checkAnswer}
				nextQuestion={this.props.nextQuestion}
			/>
		));
		
		return(
			<div class="container">
				{answers}
			</div>
		);
	}
}

export default OptionContainer;