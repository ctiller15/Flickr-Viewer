import React from 'react';

const divStyle = {
	// background: 'red',
	width: '100%',
	height: '100px',
	marginTop: '10px',
	position: 'relative'
};

const imgStyle = {
	maxWidth: '100%',
	maxHeight: '100%',
	width: 'auto',
	height: 'auto',
	position: 'absolute',
	top: '0',
	bottom: '0',
	left: '0',
	right: '0',
	margin: 'auto'
}

const SearchResultItem = (props) => {

	let photo = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
	return(
			<div 
				onClick={() => props.onImageSelect(photo)}
				onMouseOver={function(){ this.style.background = 'red'}}
				style={divStyle}>
				<img className="img-thumbnail" style={imgStyle} src={photo}/>
			</div>
		)
}

export default SearchResultItem;