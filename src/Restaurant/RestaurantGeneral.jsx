import React, {Component} from "react";

export default class RestaurantGeneral extends Component { 
	constructor(props) {
	    super(props);
	    this.state = {
	    	category: props.category,
	    	index: props.index,
	    	url: props.restaurant.image_url,
	    	name: props.restaurant.name,
	    	rating: props.restaurant.rating,
	    	price: props.restaurant.price,
	    	detailsUrl: "/restaurants/" + props.category + "/" + props.index
	    };
  	}	

	render() {
	    return (
	    	<div className="restaurant-general">
	    		<div className="image">
	    			<a href={this.state.detailsUrl}>
	    				<img src={this.state.url} alt={this.state.title} />
	    			</a>
	    		</div>
	    		<div className="content">
	    			<a className= "name item" href={this.state.detailsUrl}>{this.state.name}</a>
	    			<span className="description item">Rating: {this.state.rating} Price:{this.state.price}</span>
	    			<a className="details grey item" href={this.state.detailsUrl}> Details </a>
	    		</div>
	    	</div>
	    );
	}
}