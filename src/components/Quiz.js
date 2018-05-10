import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';
import ErrorScreen from './ErrorScreen';

import Client from '../Client';

// TODO
// 1.[x] Session token
// 	1a.[x] Reset token if user has exhausted questions in any category - Code 4: Token Empty.
// 	1b.[x] Handle Error - Code 3: Token Not Found.
// 2.[x]  handle errors with response codes from api.
// 	2a. [x] Mainly handle Code 1: No Results, API doesnt have enough results (Ex. Asking for 10 question but only have 8).
// 3. [ ]  Clicking any category needs to set category to empty same with mix it up in difficulty
// 4.[ ]  make a loading component and use for category and question loading.
// 5.[ ]  make responsive
// 6.[ ]  check console errors and clean up accordinly
// 7.[ ]  end screen with score out of 10
// 8.[ ]  show questions available in each category and then number of questions available per difficulty. 
//    		Might require lots of calls to same url, making it slow.
// 9.[ ]  Allow users one wrong answer? - fade it out when clicked.

class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			error: {
				code: 0,
				text: '',
			},
			sessionToken: '',
			categories: [],
			chosenCategory: '',
			difficulty: '',
		}

		this.categoryChoice = this.categoryChoice.bind(this);
		this.difficultyChoice = this.difficultyChoice.bind(this);
		this.getToken = this.getToken.bind(this);
		this.resetToken = this.resetToken.bind(this);
		this.getCategories = this.getCategories.bind(this);
		this.handleErrors = this.handleErrors.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
	}

	componentWillMount() {
		this.getToken();
		this.getCategories();
	}

	getToken() {
		Client.fetchToken((data) => {
			this.setState({
				sessionToken: data.token,
			});
		});
	};

	resetToken() {
		Client.fetchToken((data) => {
			this.setState({
				sessionToken: data.token,
			});
		});
	};

	getCategories() {
		Client.fetchCategories((data) => {
			if(data.response_code !== 0) {
				this.handleErrors(data.response_code);
			};
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

	handleErrors(code) {
		switch(code) {
			case 1:
				this.setState({
					error: {
						code: 1,
						text: "Not enough questions :(",
					}
				});
				break;
			case 2: 
				this.setState({
					error: {
						code: 2,
						text: "Invalid Parameters",
					}
				});
				break;
			case 3:
				this.setState({
					error: {
						code: 3,
						text: "Token not found",
					}
				});
				break;
			case 4:
				this.setState({
					error: {
						code: 4,
						text: "Not enough questions left in this category.",
					}
				});
				break;
		}
	}

	clearErrors() {
		this.setState({
			error: {
				code: 0,
				text: '',
			}
		});
	}

	render () {
		return (
			<div>
				<Route path="/" render={() => <Redirect to="/category" />} />
				<Route 
					path="/category" 
					render={() => {
							if(this.state.error.code !== 0) {
								return <Redirect to="/error" />
							} else {
								return (
									<CategoryContainer 
										categories={this.state.categories}
										categoryChoice={this.categoryChoice}
									/>
								);
							}
						}
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
							resetToken={this.resetToken}
							handleErrors={this.handleErrors}
						/>
					} 
				/>
				<Route
					path="/error"
					render={() => 
						<ErrorScreen 
							error={this.state.error}
							clearErrors={this.clearErrors}
							resetToken={this.resetToken}
						/>
					}
				/>
			</div>
		);
	}
}

export default Quiz;