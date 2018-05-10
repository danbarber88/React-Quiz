import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorScreen.css';

class ErrorScreen extends Component {

	render() {
		let resetQuestions = <Link to="/category" className="error-selection" onClick={() => {this.props.resetToken(); this.props.clearErrors()}}>
													 <p>Reset Questions</p>
												 </Link>

		let newCategory = <Link to="/category" className="error-selection" onClick={this.props.clearErrors}>
											  <p>New Category</p>
										  </Link>

		return (
			<div className="error-screen">
				<div className="error-container">
					<div className="error-box">
						<p>{this.props.error.text}</p>
					</div>
					<div className="error-selection-container">
						{this.props.error.code === 2 ||
						 this.props.error.code === 3 ||
						 this.props.error.code === 4 ? resetQuestions : ''}

						{this.props.error.code === 1 ||
						 this.props.error.code === 4 ? newCategory : ''}
					</div>
				</div>
			</div>
		);
	}
}

export default ErrorScreen;