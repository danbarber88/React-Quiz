import React, { Component } from 'react';
import Option from './Option';

class OptionContainer extends Component {
	render() {
		return(
			<div class="container">
				<Option text="Bim bam zim bam" />
				<Option text="Pis' off" />
				<Option text="Ring-ding-ding-ding-dingeringeding!" />
				<Option text="Hello, I'm a Fox!" />
			</div>
		);
	}
}

export default OptionContainer;