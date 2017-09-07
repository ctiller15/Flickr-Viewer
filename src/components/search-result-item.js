import React, {Component} from 'react';



class SearchResultItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			hovered: false
		}
	}

	divStyle() {
		return {
			// background: 'red',
			width: '100%',
			height: '100px',
			marginTop: '10px',
			position: 'relative'
		}
	};

	imgStyle() {
		if (this.state.hovered) {
			return {
				maxWidth: '100%',
				maxHeight: '100%',
				width: 'auto',
				height: 'auto',
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				margin: 'auto',
				cursor: 'pointer',
				transform: 'scale(1.15)'
			}
		} else {
			return {
				maxWidth: '100%',
				maxHeight: '100%',
				width: 'auto',
				height: 'auto',
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				margin: 'auto',
				filter: 'opacity(.6)'
			}
		}
	}

	onMouseOver() {
		this.setState({hovered: true});
	}

	onMouseOut() {
		this.setState({hovered: false});
	}	

	render() {
		let photo = `https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`;
		return(
				<div 
					onMouseOver={() => this.onMouseOver()}
					onMouseOut={() => this.onMouseOut()}
					onClick={() => this.props.onImageSelect(photo)}
					style={this.divStyle()}>
					<img className="img-thumbnail" style={this.imgStyle()} src={photo}/>
				</div>
			);
		}
}

export default SearchResultItem;