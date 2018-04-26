import React, { Component } from 'react';
import Category from './Category';

class CategoryContainer extends Component {
	render() {
		return(
			<div>
				<h1>Category?</h1>
				<div className="container">
					<Category name="Any Category" />
					<Category name="General Knowledge" />
					<Category name="Books" />
					<Category name="Film" />
					<Category name="Music" />
					<Category name="Musicals & Theatres" />
					<Category name="Television" />
					<Category name="Video Games" />
					<Category name="Board Games" />
					<Category name="Mythology" />
					<Category name="Sports" />
					<Category name="Geography" />
					<Category name="History" />
					<Category name="Politics" />
					<Category name="Art" />
					<Category name="Celebrities" />
					<Category name="Animals" />
					<Category name="Vehicles" />
					<Category name="Gadgets" />
					<Category name="Japanese Anime & Manga" />
					<Category name="Cartoon & Animations" />
				</div>
			</div>
		);
	}
}

export default CategoryContainer;