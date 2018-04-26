import React, { Component } from 'react';
import '../styles/CategoryContainer.css';
import Category from './Category';

class CategoryContainer extends Component {
	render() {
		return(
			<div className="category-container">
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
		);
	}
}

export default CategoryContainer;