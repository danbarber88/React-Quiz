import React, { Component } from 'react';
import Category from './Category';

import Client from '../Client';

class CategoryContainer extends Component {
	render() {
		let categories = this.props.categories.map((categorie, i) => (
			<Category 
				key={i}
				name={categorie.name}
				id={categorie.id}
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