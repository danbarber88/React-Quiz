import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

import Client from '../Client';

// TODO
// 1.[x] Session token
// 	1a.[ ] Reset token if user has exhausted questions in any category - Code 4: Token Empty.
// 	1b.[ ] Handle Error - Code 3: Token Not Found.
// 2.[ ]  handle errors with response codes from api. handle them in the promise chains of Client.js
// 	2a. [ ] Mainly handle Code 1: No Results, API doesnt have enough results (Ex. Asking for 10 question but only have 8).
// 3.[ ]  make a loading component and use for category and question loading.
// 4.[ ]  make responsive
// 5.[ ]  check console errors and clean up accordinly
// 6.[ ]  end screen with score out of 10
// 7.[ ]  show questions available in each category and then number of questions available per difficulty. 
//    		Might require lots of calls to same url, making it slow.
// 8.[ ]  Allow users one wrong answer? - fade it out when clicked.

class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sessionToken: '',
			categories: [],
			chosenCategory: '',
			difficulty: '',
		}

		this.categoryChoice = this.categoryChoice.bind(this);
		this.difficultyChoice = this.difficultyChoice.bind(this);
		this.getToken = this.getToken.bind(this);
		this.getCategories = this.getCategories.bind(this);
	}

	componentWillMount() {
		this.getToken();
		this.getCategories();
	}

	getToken() {
		Client.fetchToken((data) => {
			alert("Now using new session token!");
			this.setState({
				sessionToken: data.token,
			});
		});
	};

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
							token={this.state.sessionToken}
						/>
					} 
				/>
			</div>
		);
	}
}

export default Quiz;