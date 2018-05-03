import React, { Component } from 'react';
import Option from './Option';

import shuffle from 'shuffle-array';

class OptionContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			answers: [],
			blockClick: false,
		}
	}

	componentWillMount() {
		this.shuffleAnswers();
	}

	shuffleAnswers = () => {
		const correctAnswer = this.props.correct;
		let answers = this.props.incorrect.concat(correctAnswer);
		shuffle(answers);
		this.setState({answers: answers})
	}

	handleOptionClick = (answerText) => {
		if (!this.state.blockClick) {
			const afterClick = this.state.answers.map((answer) => {
				if (answer === answerText) {
					if(this.props.checkAnswer(answer)) {
						return Object.assign({}, {
							text: answer,
							classNames: "box correct"
						})
					} else {
						return Object.assign({}, {
							text: answer,
							classNames: "box incorrect"
						})
					}
				} else {
					return Object.assign({}, {
						text: answer,
						classNames: "box after-choice"
					})
				}
			});
			this.setState({
				answers: afterClick,
				blockClick: true,
			});
			setTimeout(() => {
				this.props.nextQuestion();
				this.shuffleAnswers();
				this.setState({
					classNames: "box",
					blockClick: false,
				});
				
			}, 2000);
		}
	}

	render() {
		let answers = this.state.answers.map((answer, i) => (
			<Option 
				key={i}
				text={this.state.answers[i].text || answer}
				classNames={this.state.answers[i].classNames || "box"}
				onClick={this.handleOptionClick}
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