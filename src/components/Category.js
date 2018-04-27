import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {

	handleClick = () => {
		return this.props.categoryChoice(this.props.id);
	}

	render() {
		return(
			<Link to="/difficulty" onClick={this.handleClick}> 
				<div className="box">
					<p>{this.props.name}</p>
				</div>
			</Link>
		);
	}
}

export default Category;