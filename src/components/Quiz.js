import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import CategoryContainer from './CategoryContainer';

class Quiz extends Component {
	render () {
		return (
			<div>
				<Route path="/" render={() => <Redirect to="/category" />} />
				<Route path="/category" component={CategoryContainer} />
				<Route path="/difficulty" render={() => <h1>Difficulty?</h1>} />
			</div>
		);
	}
}

export default Quiz;