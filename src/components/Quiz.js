import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

import Client from '../Client';

// TODO
// 1. Dont forget about session token to stop repeat questions
// 2. in Question build url from quiz state and get 10 questions
// 3. Block clicks after first click: check the react router docs for preventing transitions
// 4. Move category state to catgory container so we are not making an api call everytime quiz mounts.
// 5. end screen with score out of 10
// 6. allow one wrong answer which starts a short countdown (less than a second) to the next question - use a yellow/orange countdown bar 
//		like the pomodor one.
// 7. handle errors 

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
					path="/questions" 
					render={() => 
						<Question />
					} 
				/>
			</div>
		);
	}
}

export default Quiz;