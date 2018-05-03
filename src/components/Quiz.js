import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

import Client from '../Client';

// TODO
// 1. Dont forget about session token to stop repeat questions
// 2. in Question build url from quiz state and get 10 questions
// 3. make a loading component and use for category adn question loading.
// 4. end screen with score out of 10
// 5. handle errors 

class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categories: [],
			chosenCategory: '',
			difficulty: '',
		}

		this.categoryChoice = this.categoryChoice.bind(this);
		this.difficultyChoice = this.difficultyChoice.bind(this);
		this.getCategories = this.getCategories.bind(this);
	}

	componentWillMount() {
		this.getCategories();
	}

	getCategories() {
		Client.fetchCategories((data) => {
			this.setState({
				categories: data.trivia_categories
			});
		});
	}

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
				<Route path="/" render={() => <Redirect to="/category" />} />
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
						<Question 
							category={this.state.chosenCategory}
							difficulty={this.state.difficulty}
						/>
					} 
				/>
			</div>
		);
	}
}

export default Quiz;