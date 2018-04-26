import React, { Component } from 'react';
import QuestionText from './QuestionText';
import OptionContainer from './OptionContainer';

class Question extends Component {
	render() {
		return(
			<div>
				<QuestionText 
					text="What in the bloody hell did that flippin physco fox say?" 
				/>
				<OptionContainer />
			</div>
		);
	}
}

export default Question;