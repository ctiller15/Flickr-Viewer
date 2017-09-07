import React from 'react';

const displayStyle = {
	backgroundColor: 'rgb(33,33,36)',
	height: '22em',
	padding: '.5% 0'
}

const containerStyle = {
	height: '100%',
	width: '100%',
	position: 'relative'
}

// Perfectly centers the image.

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

const BooruDisplay = ({display}) => {

	if(!display){
		return <div>Loading the flicks...</div>
	}

	return (
			<div className="container-fluid">
				<div className="row">
					<div className="display center-block" style={displayStyle}>
						<div style={containerStyle}>
							<img className="img-rounded" style={imgStyle} src={display} />
						</div>
					</div>
				</div>
			</div>
		);

}

export default BooruDisplay;