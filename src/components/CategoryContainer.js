import React, { Component } from 'react';
import Category from './Category';

class CategoryContainer extends Component {
	render() {
		return(
			<div>
				<h1>Category?</h1>
				<div className="container">
					<Category name="Film" />
					<Category name="Geography" />
					<Category name="Video Games" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
					<Category name="Art" />
				</div>
			</div>
		);
	}
}

export default CategoryContainer;