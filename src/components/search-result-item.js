import React from 'react';

const divStyle = {
	background: 'red',
	width: '100%',
	height: '100px',
	marginTop: '10px'
};

const imgStyle = {
	maxWidth: '100%',
	maxHeight: '100%'
}

const SearchResultItem = (props) => {

	var photo = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
	return(
			<div style={divStyle}>
				<img className="center-block" style={imgStyle} src={photo}/>
			</div>
		)
}

export default SearchResultItem;