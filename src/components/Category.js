import React, { Component } from 'react';

class Category extends Component {
	render() {
		return(
			<div className="box">
				<p>{this.props.name}</p>
			</div>
		);
	}
}

export default Category;