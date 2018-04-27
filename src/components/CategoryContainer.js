import React, { Component } from 'react';
import Category from './Category';

import Client from '../Client';

class CategoryContainer extends Component {
	render() {
		let categories = this.props.categories.map((category, i) => (
			<Category 
				key={i}
				name={category.name}
				id={category.id}
				categoryChoice={this.props.categoryChoice}
			/>
		))

		return(
			<div>
				<h1>Category?</h1>
				<div className="container">
					{categories}
				</div>
			</div>
		);
	}
}

export default CategoryContainer;