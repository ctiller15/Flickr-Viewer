import $ from 'jquery';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Importing my components
import SearchBar from './components/search-bar';
import BooruDisplay from './components/display';
import SearchResults from './components/search-results';

class App extends Component {
	constructor(props){
		super(props);

		this.state={
			display: null,
			results: []
		}

		this.flickrSearch('');
	};

	// need: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	// farm id
	// server id
	// id
	// secret

	flickrSearch(term){
		const url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=9385403d1d75fd9c66a587d021cbfc3a&per_page=8&text="words"&format=json&jsoncallback=?';
		$.getJSON(url)
  			.done((data) => {
  				var first = data.photos.photo[0];
				this.setState({
					display: `https://farm${first.farm}.staticflickr.com/${first.server}/${first.id}_${first.secret}.jpg`,
					results: data.photos.photo
				});
			});
	}

	render(){
	return(
			<div className="container">
				<SearchBar />
				<BooruDisplay display={this.state.display} />
				<SearchResults results={this.state.results} />
			</div>
		);
	};
}

ReactDOM.render(<App/>, document.querySelector('#container'));