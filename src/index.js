import $ from 'jquery';
import _ from 'lodash';

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

		this.flickrSearch('surfboards');
	};

	// need: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	// farm id
	// server id
	// id
	// secret

	flickrSearch(term){
		const url = `https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=9385403d1d75fd9c66a587d021cbfc3a&per_page=12&text="${term}"&sort="interestingness-desc"&format=json&jsoncallback=?`;
		$.getJSON(url)
  			.done((data) => {
  				if(data.photos.photo[0]){
	  				var first = data.photos.photo[0];
					this.setState({
						display: `https://farm${first.farm}.staticflickr.com/${first.server}/${first.id}_${first.secret}.jpg`,
						results: data.photos.photo
					});  					
  				}

			});
	}

	render(){
		const flickrSearch = _.debounce((term) => { this.flickrSearch(term) }, 300);

		const containerStyle = {
		}

		const headerStyle = {
			background: 'rgb(20,20,22)',			
			margin: '0',
			padding: '1%',
			position: 'relative',
			top: '0',
			color: 'rgb(255,255,255)',
			fontFamily: 'Istok Web',
			fontWeight: 'bold'
		}
	return(
			<div className="" style={containerStyle}>
				<h1 className="text-center" style={headerStyle}>Flickr Viewer</h1>
				<SearchBar onSearchTermChange={flickrSearch}/>
				<BooruDisplay display={this.state.display} />
				<SearchResults 
				onImageSelect={display => this.setState({display}) }
				results={this.state.results} />
			</div>
		);
	};
}

ReactDOM.render(<App/>, document.querySelector('#container'));