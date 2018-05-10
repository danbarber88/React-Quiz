import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QuestionText from './QuestionText';
import OptionContainer from './OptionContainer';

import Client from '../Client';

class Question extends Component {
  
	constructor(props) {
		super(props)

		this.state = {
			error: false,
			questions: [],
			currentQuestion: {},
			questionNumber: 0,
			isLoading: true,
		}

		this.getQuestions = this.getQuestions.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);
	}

	componentWillUnmount() {
		this.setState({
			error: false,
		});
	}

	componentWillMount() {
		this.getQuestions();
	}

	getQuestions() {
		const category = this.props.category;
		const difficulty = this.props.difficulty;
		const token = this.props.token;
		Client.fetchQuestions(category, difficulty, token, (data) => {
			if(data.response_code !== 0) {
				this.props.handleErrors(data.response_code);
				this.setState({
					error: true,
				});
			} else {
				this.setState({
					questions: data.results,
					currentQuestion: data.results[0],
					questionNumber: this.state.questionNumber + 1,
					isLoading: false,
				});
			};
		});
	};

	nextQuestion() {
		this.setState({
			currentQuestion: this.state.questions[this.state.questionNumber],
			questionNumber: this.state.questionNumber + 1,
		})
	};

	checkAnswer = (answer) => {
		const correctAnswer = this.state.currentQuestion.correct_answer
		return answer === correctAnswer ? true : false;
	};

	render() {

		if(this.state.error) {
			return <Redirect to="/error" />
		}

		// Redirect to category if all question have been answered but only if there were questions in the first place.
		if (this.state.questionNumber > this.state.questions.length && this.state.questions.length > 0) {
			return <Redirect to="/category" />
		}

		if (this.state.isLoading) {
			return(
				<QuestionText 
					text="Loading..."
				/>
			)
		} else {
			return(
				<div>
					<QuestionText 
						text={this.state.currentQuestion.question}
						questionNumber={this.state.questionNumber}
					/>
					<OptionContainer 
						correct={this.state.currentQuestion.correct_answer}
						incorrect={this.state.currentQuestion.incorrect_answers}
						nextQuestion={this.nextQuestion}
						checkAnswer={this.checkAnswer}
					/>
				</div>
			)
		}
	}
}

export default Question;