import React, { Component } from 'react';
import Option from './Option';

class OptionContainer extends Component {
	render() {
		return(
			<div class="container">
				<Option text="6 to 10 percent" />
				<Option text="1 to 3 percent" />
				<Option text="3 to 6 percent" />
				<Option text="less than 1 percent" />
			</div>
		);
	}
}

export default OptionContainer;