import React from 'react';
import SearchResultItem from './search-result-item';

const SearchResults = (props) => {
	const SearchItems = props.results.map((photo) => {
		return(
				<div className="col-xs-3">
					<SearchResultItem 
						farm={photo.farm}
						server={photo.server}
						id={photo.id}
						secret={photo.secret}
					/>
				</div>
			)
	})
	return(
		<div className="container">
			<div className="row">
				{ SearchItems }
			</div>
		</div>
		)

}

export default SearchResults;