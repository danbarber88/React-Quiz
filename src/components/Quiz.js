import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';
import Difficulty from './Difficulty';

class Quiz extends Component {
	render () {
		return (
			<div>
				<Route path="/" render={() => <Redirect to="/category" />} />
				<Route path="/category" component={CategoryContainer} />
				<Route path="/difficulty" component={Difficulty} />
			</div>
		);
	}
}

export default Quiz;