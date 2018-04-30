import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QuestionText from './QuestionText';
import OptionContainer from './OptionContainer';

class Question extends Component {
  
	constructor(props) {
		super(props)

		this.state = {
			questions: [
				{
					question: "Which movie released in 2016 features Superman and Batman fighting?",
					correct_answer: "Batman v Superman: Dawn of Justice",
					incorrect_answers: [
						"Batman v Superman: Superapocalypse",
						"Batman v Superman: Black of Knight",
						"Batman v Superman: Knightfall"
					]
				},
				{
					question: "Who plays Alice in the Resident Evil movies?",
					correct_answer: "Milla Jovovich",
					incorrect_answers: [
						"Madison Derpe",
						"Milla Johnson",
						"Kim Demp"
					]
				},
				{
					question: "What does the fox say?",
					correct_answer: "True",
					incorrect_answers: [
						"False",
					]
				},
				{
					question: "How long is a piece of string?",
					correct_answer: "What!?",
					incorrect_answers: [
						"The shit!?",
					]
				}
			],
			currentQuestion: {},
			questionNumber: 0,
		}
	}

	componentWillMount() {
		this.showQuestion();
	}

	showQuestion = () => {
		this.setState({
			currentQuestion: this.state.questions[this.state.questionNumber],
			questionNumber: this.state.questionNumber + 1,
		})
	};

	nextQuestion = () => {
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

		// Redirect to category if all question have been answered
		if (this.state.questionNumber > this.state.questions.length) {
			return <Redirect to="/category" />
		}

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
		);
	}
}

export default Question;