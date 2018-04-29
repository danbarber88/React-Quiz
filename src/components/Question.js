import React, { Component } from 'react';
import QuestionText from './QuestionText';
import OptionContainer from './OptionContainer';

class Question extends Component {

	

	render() {
		return(
			<div>
				<QuestionText 
					text={this.props.questions[2].question} 
				/>
				<OptionContainer 
					correct={this.props.questions[2].correct_answer}
					incorrect={this.props.questions[2].incorrect_answers}
				/>
			</div>
		);
	}
}

export default Question;