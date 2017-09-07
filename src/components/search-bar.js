import React, { Component } from 'react';

const barStyle = {
	background: 'rgb(20,20,22)'
}

const inputStyle = {
	width: '50%',
	margin: '1% auto'
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
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12" style={barStyle}>
						<input className="form-control" style={inputStyle} type="text" placeholder="search Flickr, Example: 'surfboards'"
						value={this.state.term}
						onChange={(event) => this.onInputChange(event.target.value)}/>
					</div>
				</div>
			</div>
		);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

};

export default SearchBar;