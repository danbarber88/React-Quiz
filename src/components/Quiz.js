import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

import Client from '../Client';

class Quiz extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categories: [],
			chosenCategorie: '',
		}

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

	render () {
		return (
			<div>
				{/* <Route path="/" render={() => <Redirect to="/category" />} /> */}
				<Route 
					path="/category" 
					render={() => 
						<CategoryContainer 
							categories={this.state.categories}
						/>
					} 
				/>
				<Route path="/difficulty" component={Difficulty} />
				<Route path="/question" component={Question} />
			</div>
		);
	}
}

export default Quiz;