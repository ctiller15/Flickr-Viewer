import React, { Component } from 'react';

const barStyle = {
	margin: '5% 0'
}

const inputStyle = {
	width: '75%',
	margin: '0 12.5%'
}

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}

	render() {
		return (
			<div className="search-bar col-xs-12" style={barStyle}>
				<input className="form-control" style={inputStyle} type="text"/>
			</div>
		);
	}

};

export default SearchBar;