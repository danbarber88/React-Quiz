import React, { Component } from 'react';
import QuestionText from './QuestionText';
import OptionContainer from './OptionContainer';

class Question extends Component {
	render() {
		return(
			<div>
				<QuestionText 
					text="One of the deadliest pandemics, the &quot;Spanish Flu&quot;, killed off what percentage of the human world population at the time?" 
				/>
				<OptionContainer />
			</div>
		);
	}
}

export default Question;