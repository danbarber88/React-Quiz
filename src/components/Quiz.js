import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';
import Question from './Question';

class Quiz extends Component {
	render () {
		return (
			<div>
				{/* <Route path="/" render={() => <Redirect to="/category" />} /> */}
				<Route path="/category" component={CategoryContainer} />
				<Route path="/difficulty" component={Difficulty} />
				<Route path="/question" component={Question} />
			</div>
		);
	}
}

export default Quiz;