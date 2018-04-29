import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

import Client from '../Client';

// TODO
// 1. Dont forget about session token to stop repeat questions
// 2. in Question build url from quiz state and get 10 questions
// 3. work out question logic

class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categories: [
				{
					id: 9,
					name: "General Knowledge"
				},
				{
					id: 10,
					name: "Entertainment: Books"
				},
				{
					id: 11,
					name: "Entertainment: Film"
				},
				{
					id: 12,
					name: "Entertainment: Music"
				},
			],
			chosenCategory: '',
			difficulty: '',
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
				}
			],
			questionCount: 0,
		}

		this.categoryChoice = this.categoryChoice.bind(this);
		this.difficultyChoice = this.difficultyChoice.bind(this);
		// this.getCategories = this.getCategories.bind(this);
	}

	// componentWillMount() {
	// 	this.getCategories();
	// }

	// getCategories() {
	// 	Client.fetchCategories((data) => {
	// 		this.setState({
	// 			categories: data.trivia_categories
	// 		});
	// 	});
	// }

	categoryChoice(categoryId) {
		this.setState({
			chosenCategory: categoryId,
		})
	}

	difficultyChoice(difficulty) {
		this.setState({
			difficulty: difficulty,
		})
	}

	render () {
		return (
			<div>
				{/* <Route path="/" render={() => <Redirect to="/category" />} />*/}
				<Route 
					path="/category" 
					render={() => 
						<CategoryContainer 
							categories={this.state.categories}
							categoryChoice={this.categoryChoice}
						/>
					} 
				/>
				<Route 
					path="/difficulty" 
					render={() => 
						<Difficulty
							difficultyChoice={this.difficultyChoice}
						/>
					} 
				/>
				<Route 
					path="/question" 
					render={() => 
						<Question 
							questions={this.state.questions}
						/>
					} 
				/>
			</div>
		);
	}
}

export default Quiz;