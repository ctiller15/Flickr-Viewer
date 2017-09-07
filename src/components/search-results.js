import React from 'react';
import SearchResultItem from './search-result-item';

const SearchResults = (props) => {
	const SearchItems = props.results.map((photo) => {
		return(
				<div className="col-xs-2">
					<SearchResultItem
						onImageSelect={props.onImageSelect} 
						farm={photo.farm}
						server={photo.server}
						id={photo.id}
						secret={photo.secret}
					/>
				</div>
			)
	});

	const searchResultStyle = {
		// background: 'yellow'
	}

	return(
			<div className="container">
				<div className="row" style={searchResultStyle}>
					{ SearchItems }
				</div>
			</div>
		)

}

export default SearchResults;