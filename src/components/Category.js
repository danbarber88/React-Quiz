import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
	render() {
		return(
			<Link to="/difficulty"> 
				<div className="box">
					<p>{this.props.name}</p>
				</div>
			</Link>
		);
	}
}

export default Category;