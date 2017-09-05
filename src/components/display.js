import React from 'react';

const displayStyle = {

}

const imgStyle = {
	margin: '0 auto'
}

const BooruDisplay = ({display}) => {

	if(!display){
		return <div>Loading the flicks...</div>
	}

	return (
			<div className="display center-block">
				<img className="img-responsive" style={imgStyle} src={display} />
			</div>
		);

}

export default BooruDisplay;